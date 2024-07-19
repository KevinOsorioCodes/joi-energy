import React from "react";
import * as PropTypes from "prop-types";
export const ConsumptionCard = ({ title, value, symbol }) => {
  return (
    <div className="col-12 shadow-2 bg-card roundedMore pr2 pl2 pt1 pb1">
      <div data-testid="title">{title}</div>
      <div data-testid="value">{value}</div>
      <div data-testid="symbol">{symbol}</div>
    </div>
  );
};

ConsumptionCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  symbol: PropTypes.string,
};
