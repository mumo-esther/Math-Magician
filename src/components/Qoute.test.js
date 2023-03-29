import React from "react";
import { render } from "@testing-library/react";
import Quote from "./Qoute";

describe("Quote component", () => {
  test("renders correctly", () => {
    const { container } = render(<Quote />);
    expect(container).toMatchSnapshot();
  });
});

describe("Quote component", () => {
  test("displays loading message when loading", () => {
    const { getByText } = render(<Quote />);
    expect(getByText("Loading...")).toBeInTheDocument();
  });
});
