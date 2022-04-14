import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  it("shows Lawyers information", () => {
    render(<Card />);

    const ul = screen.getByRole("ul", { ListElement: "Lawyer´s specialty" });
    expect(ul).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
