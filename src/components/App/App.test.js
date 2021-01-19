import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import App from "./App";
import { getOrders } from "../../apiCalls";
import { sampleOrders } from "../../sampleData";
import userEvent from "@testing-library/user-event";
jest.mock("../../apiCalls");

describe("App", () => {
  getOrders.mockResolvedValue(sampleOrders);

  const mockedGetOrders = jest.fn();
  beforeEach(() => {
    render(<App getOrders={mockedGetOrders} />);
  });

  it("should render the application correctly", () => {
    const title = screen.getByText("Burrito Builder");
    const steakButton = screen.getByRole("button", {
      name: /steak/i,
    });
    const sofritasButton = screen.getByRole("button", {
      name: /sofritas/i,
    });
    const jalapenosButton = screen.getByRole("button", {
      name: /jalapenos/i,
    });

    const nameInputField = screen.getByPlaceholderText(/name/i);
    const emptyOrderText = screen.getByText(/order: nothing selected/i);
    const submitOrderButton = screen.getByRole("button", {
      name: /submit order/i,
    });

    const samOrderCard = screen.getByTestId("2");

    expect(title).toBeInTheDocument();
    expect(steakButton).toBeInTheDocument();
    expect(sofritasButton).toBeInTheDocument();
    expect(jalapenosButton).toBeInTheDocument();
    expect(nameInputField).toBeInTheDocument();
    expect(emptyOrderText).toBeInTheDocument();
    expect(submitOrderButton).toBeInTheDocument();
    expect(samOrderCard).toBeInTheDocument();
  });

  it("should fetch all orders from the API on page load", () => {
    expect(mockedGetOrders).toBeCalled();
  });
});
