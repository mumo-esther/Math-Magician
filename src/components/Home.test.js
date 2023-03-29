import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./Home";

describe("HomePage component", () => {
  it("should display the correct heading", () => {
    render(<HomePage />);
    const headingElement = screen.getByText("Welcome to the home page");
    expect(headingElement).toBeInTheDocument();
  });

  it("should display the correct paragraph text", () => {
    render(<HomePage />);
    const paragraphElement = screen.getByText(
      "This is the home page of calculator app"
    );
    expect(paragraphElement).toBeInTheDocument();
  });
});
