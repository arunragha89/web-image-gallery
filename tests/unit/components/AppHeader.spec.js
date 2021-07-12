import { render, cleanup } from "@testing-library/vue";
import AppHeader from "@/components/AppHeader.vue";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

function setUp() {
  const utils = render(AppHeader);
  return utils;
}

test("application logo is present", async () => {
  const utils = setUp();

  expect(
    utils.getByAltText("Camera Icon logo of application")
  ).toBeInTheDocument();
});

test("search bar is present in the header", () => {
  const utils = setUp();

  expect(utils.getByPlaceholderText("Search Images")).toBeInTheDocument();
});
