import React, { useEffect, useMemo } from "react";
import { renderChart } from "../utils/chart.js";
import { groupByDay, sortByTime } from "../utils/reading";
import { ConsumptionCard } from "./Cards/ConsumptionCard";
const parseDigitsNumber = (num, options) => {
  const formatter = Intl.NumberFormat("en", options);
  return formatter.format(num);
};

const withoutDecimals = { maximumFractionDigits: 0 };
const withDecimals = { maximumFractionDigits: 4 };
  const containerId = "usageChart";
export const EnergyConsumption = ({ readings }) => {

  const comsumeData = useMemo(() => {
    return sortByTime(groupByDay(readings)).slice(-30);
  }, []);

  const [cost, consumption, footPrint] = comsumeData.reduce(
    (acc, element) => {
      const actualCost = (acc[0] += element.value * 0.138);
      const actualConsumption = (acc[1] += element.value);
      const actualFootprint = (acc[2] += element.value * 0.0002532);
      return [actualCost, actualConsumption, actualFootprint];
    },
    [0, 0, 0]
  );
  useEffect(() => {
    renderChart(containerId, comsumeData);
  }, [comsumeData]);
  return (
    <>
      <h1 className="regular darkgray line-height-1 mb3">Energy consumption</h1>
      <section className="mb3">
        <button
          className="
              h5
              inline-block
              shadow-2
              pl2
              pr2
              pt1
              pb1
              roundedMore
              border-grey
              bg-blue
              white
              bold
            "
        >
          Last 30 days
        </button>
      </section>
      <section className="chartHeight mb3">
        <canvas id={containerId} />
      </section>
      <div className="flex justify-between gap2">
        <ConsumptionCard
          title={"Cost"}
          value={parseDigitsNumber(cost, withoutDecimals)}
          symbol={"$"}
        />
        <ConsumptionCard
          title={"Consumption"}
          value={parseDigitsNumber(consumption, withoutDecimals)}
          symbol={"kWh"}
        />
        <ConsumptionCard
          title={"Footprint"}
          value={parseDigitsNumber(footPrint, withDecimals)}
          symbol={"tonnes"}
        />
      </div>
    </>
  );
};
