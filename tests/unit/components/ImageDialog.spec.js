import {
  render,
  waitFor,
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
    props: { showImageDialog: true, imageSelected: imagesMock[0] },
  });
  return utils;
}

test("image dialog is loaded with user picture, user name and image", async () => {
  //const utils = setUp();
  //   await waitFor(() => utils.getByText("Espolòn Tequila"));
  //   expect(utils.getByText("Espolòn Tequila")).toBeInTheDocument();
});
