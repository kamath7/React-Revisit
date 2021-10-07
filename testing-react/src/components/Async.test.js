import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component testing", () => {
  test("renders posts from api", async () => {
    window.fetch = jest.fn(); //mocking the fetch api
    window.fetch.mockResolvedValueOnce({
        json: async ()=>[{id:'p1', title: 'first post'}]
    });
    render(<Async />);
    const listItemElems = await screen.findAllByRole("listitem"); //this returns a promise
    expect(listItemElems).not.toHaveLength(0);
  });
});
