import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "../components/navbar/Navbar";
import userEvent from "@testing-library/user-event";

describe("Navbar", () => {
  beforeEach(() => {});

  test("renders logo", () => {
    render(<Navbar />);
    const logoElement = screen.getByText("KTM-Booking");
    expect(logoElement).toBeInTheDocument();
  });
  test("clicking buttons call event", () => {
    render(<Navbar />);
    const registerBtn = screen.getByRole("button", { name: "Register" });
    userEvent.click(registerBtn);
  });
});
