import { render, screen } from "@testing-library/react";
import Greet from "./Greet";
import userEvent from "@testing-library/user-event";

describe("UI tests", () => {
  test("Renders Greeting and it's text", () => {
    //Arrange
    render(<Greet />);
    //Assert
    const elemText = screen.getByText("Hello Kams!", { exact: false });
    expect(elemText).toBeInTheDocument();
  });

  test("Check what text will be rendered while button not clicked", () => {
    render(<Greet />);
    const paraElemText = screen.getByText(
      "Will we win the IPL trophy this year?",
      { exact: false }
    );
    expect(paraElemText).toBeInTheDocument();
  });
  test("Check if button clicked and text changed", () => {
    render(<Greet />);
    //act stage which was missed earlier
    const btnElem = screen.getByRole("button");
    userEvent.click(btnElem);
    const paraElemText = screen.getByText("Something cool", { exact: false });
    expect(paraElemText).toBeInTheDocument();
  });

  //   test('Does not render something cool upon button click',()=>{
  //     render(<Greet />);
  //     //act stage which was missed earlier
  //     const btnElem = screen.getByRole("button");
  //     userEvent.click(btnElem);
  //     const paraElemText = screen.queryByText("Something cool", { exact: false });
  //     expect(paraElemText).toBeNull();
  //   })
});
