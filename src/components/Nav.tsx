import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "./Icon";

const Nav = () => {
  let navigate = useNavigate();
  const onClick = (e: React.MouseEvent) => {
    switch (e.currentTarget.className) {
      case "navToLabels":
        navigate("/labels");
        break;
      case "navToMoney":
        navigate("/money");
        break;
      case "navToChart":
        navigate("/chart");
        break;
    }
  };

  return (
    <ul>
      <li className="navToLabels" onClick={onClick}>
        <Icon name="labels" />
        <span>标签</span>
      </li>
      <li className="navToMoney" onClick={onClick}>
        <Icon name="circleFilledPlus" />
        <span>记一笔</span>
      </li>
      <li className="navToChart" onClick={onClick}>
        <Icon name="chart" />
        <span>统计</span>
      </li>
    </ul>
  );
};

export { Nav };
