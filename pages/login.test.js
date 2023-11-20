import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "../pages/login"; // Adjust the import path as needed

describe("Login Component", () => {
  it("renders without crashing", () => {
    const { getByLabelText, getByText } = render(<Login />);

    // You can add more assertions here to test the rendering of your component
    const emailInput = getByLabelText("Email:");
    const passwordInput = getByLabelText("Password:");
    const submitButton = getByText("Submit");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("handles user input correctly", () => {
    const { getByLabelText } = render(<Login />);

    const emailInput = getByLabelText("Email:");
    const passwordInput = getByLabelText("Password:");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  // You can add more test cases for different behaviors of your component
});
