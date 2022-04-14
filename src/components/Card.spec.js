import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  const dummyLawyer = {
    id: "1",
    name: "Saeed Jaberi",
    specialty: ["Immigration law", "Family law"],
    language: ["Persian/Farsi, English, Chinese"],
    location: "Hamburg",
    contact: {
      address: "Große Reichenstraße 27, 20457 Hamburg",
      telephone: "+49 40 413 499 87",
      email: "jaberi@jaberilawyer.com",
      website: "www.jaberilawyer.com",
      businessHours: [
        "Mon - Thu: 9am - 6pm",
        "Fri: 9am - 4pm",
        "Sat - Sun: Closed",
      ],
    },
  };

  it("shows Lawyers information", () => {
    render(<Card lawyer={dummyLawyer} />);

    const ul = screen.getByTestId("CardList");
    expect(ul).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const lawyerName = screen.getByText(dummyLawyer.name);
    expect(lawyerName).toBeInTheDocument();
  });
});
