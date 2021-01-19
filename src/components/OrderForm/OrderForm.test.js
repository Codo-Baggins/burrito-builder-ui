// renders elements correctly
// has empty state (extra sad path)
// inputs render what’s typed
// displays which ing picked
// submit calls func w/correct params
// won’t submit incomplete

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import OrderForm from "./OrderForm";
import { getOrders } from "../../apiCalls";
import { sampleOrders } from "../../sampleData";
import userEvent from "@testing-library/user-event";

describe("OrderForm", () => {
  beforeEach(() => {
    render(<OrderForm />);
  });

  it("should render the form correctly", () => {
    const nameInputField = screen.getByPlaceholderText(/name/i);
    const submitOrderButton = screen.getByRole("button", {
      name: /submit order/i,
    });

    expect(nameInputField).toBeInTheDocument();
    expect(submitOrderButton).toBeInTheDocument();
  });
});
