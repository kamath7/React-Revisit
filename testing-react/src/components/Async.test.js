import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component testing", () => {
  test("renders posts from api", async() => {
    render(<Async />);
    const listItemElems = await screen.findAllByRole("listitem"); //this returns a promise
    expect(listItemElems).not.toHaveLength(0);
  });
});
