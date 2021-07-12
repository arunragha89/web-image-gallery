import { render, cleanup } from "@testing-library/vue";
import Modal from "@/components/common/Modal.vue";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

function setUp() {
  const utils = render(Modal, {
    slots: {
      header: "<h1>modal header</h1>",
      body: "<div>modal body</div>",
    },
  });
  return utils;
}

test("modal is rendered with header and body slots", async () => {
  const utils = setUp();

  expect(utils.getByText("modal header")).toBeInTheDocument();
  expect(utils.getByText("modal body")).toBeInTheDocument();
});
