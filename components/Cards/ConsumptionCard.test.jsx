import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ConsumptionCard } from "./ConsumptionCard";
import React from "react";
describe("ConsumptionCard", () => {
  it("show_data_correctly", () => {
    const testData = {
      title: "Cost",
      value: 123,
      symbol: "$",
    };
    const { getByTestId } = render(
      <ConsumptionCard
        title={testData.title}
        value={testData.value}
        symbol={testData.symbol}
      />
    );
    expect(getByTestId("title")).toHaveTextContent(testData.title);
    expect(getByTestId("value")).toHaveTextContent(testData.value);
    expect(getByTestId("symbol")).toHaveTextContent(testData.symbol);
  });
  it("error_with_string_value", () => {
    const testData = {
      title: "Cost",
      value: "123",
      symbol: "$",
    };
    const { getByTestId } = render(
      <ConsumptionCard
        title={testData.title}
        value={testData.value}
        symbol={testData.symbol}
      />
    );
    expect(getByTestId("title")).toHaveTextContent(testData.title);
    expect(getByTestId("value")).toHaveTextContent(testData.value);
    expect(getByTestId("symbol")).toHaveTextContent(testData.symbol);
  });
});
