import {
  render,
  cleanup,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/vue";
import ImageDialog from "@/components/ImageDialog.vue";
import { imagesMock } from "../../mocks/imageResultMock";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

function setUp() {
  const utils = render(ImageDialog, {
    props: { showImageDialog: false, imageSelected: imagesMock[0] },
  });
  return utils;
}

test("image dialog is loaded with user picture, user name and image", async () => {
  const utils = setUp();
  await utils.updateProps({ showImageDialog: true });
  expect(utils.getByText("Espolòn Tequila")).toBeInTheDocument();
  expect(utils.getByAltText("User picture")).toBeInTheDocument();
  expect(
    utils.getByAltText("Espolòn Tequila bottle beside Paloma")
  ).toBeInTheDocument();
});

test("clicking on close icon closes the modal", async () => {
  const utils = setUp();
  await utils.updateProps({ showImageDialog: true });

  const closeIcon = utils.getByAltText("close-icon");
  const img = utils.getByAltText("Espolòn Tequila bottle beside Paloma");

  fireEvent.click(utils.getByAltText("close-icon"));
  await waitForElementToBeRemoved(closeIcon);

  expect(closeIcon).not.toBeInTheDocument();
  expect(img).not.toBeInTheDocument();
});
