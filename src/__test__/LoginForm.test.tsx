import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginForm from "../LoginForm";

describe("<LoginForm />", () => {
  test("login form child element count must be 2", async () => {
    const { findByTestId } = render(<LoginForm />);
    const loginForm = await findByTestId("login-form");
    expect(loginForm.childElementCount).toBe(2);
  });
});
