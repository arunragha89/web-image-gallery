import {
  render,
  waitFor,
  cleanup,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/vue";
import ImageList from "@/components/ImageList.vue";
import { imagesMock } from "../../mocks/imageResultMock";
import "@testing-library/jest-dom";

beforeAll(() => jest.spyOn(window, "fetch"));

afterEach(() => {
  cleanup();
});

function setUp() {
  const utils = render(ImageList);
  return utils;
}

test("images are loaded from unsplash on initial load", async () => {
  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => imagesMock,
  });
  const utils = setUp();
  const images = await waitFor(() => utils.getAllByTestId(/image-/));

  expect(images.length).toBe(10);
});

test("error message is shown when api call fails", async () => {
  window.fetch.mockResolvedValueOnce({
    ok: false,
    json: async () => imagesMock,
  });

  const utils = setUp();
  await waitFor(() => utils.getByText("Something went wrong"));

  expect(utils.getByText("Something went wrong")).toBeInTheDocument();
});

test("clicking on first thumbnail expands that image and loads metadata for the first image", async () => {
  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => imagesMock,
  });
  const utils = setUp();

  await waitFor(() => utils.getAllByTestId(/image/));

  fireEvent.click(utils.getByTestId("image-0"));
  await waitFor(() => utils.getByText("Espolòn Tequila"));

  expect(utils.getByText("Espolòn Tequila")).toBeInTheDocument();
});

test("clicking on third thumbnail expands that image and loads metadata for the third image", async () => {
  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => imagesMock,
  });

  const utils = setUp();

  await waitFor(() => utils.getAllByTestId(/image/));

  fireEvent.click(utils.getByTestId("image-2"));
  await waitFor(() => utils.getByText("J. Balla Photography"));

  expect(utils.getByText("J. Balla Photography")).toBeInTheDocument();
});

test("clicking on close icon closes the modal", async () => {
  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => imagesMock,
  });

  const utils = setUp();
  await waitFor(() => utils.getAllByTestId(/image/));

  fireEvent.click(utils.getByTestId("image-0"));
  await waitFor(() => utils.getByText("Espolòn Tequila"));

  const closeIcon = utils.getByAltText("close-icon");

  expect(utils.getByText("Espolòn Tequila")).toBeInTheDocument();
  expect(closeIcon).toBeInTheDocument();

  fireEvent.click(utils.getByAltText("close-icon"));
  await waitForElementToBeRemoved(closeIcon);

  expect(closeIcon).not.toBeInTheDocument();
});
