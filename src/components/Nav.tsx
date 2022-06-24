import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "./Icon";

const Nav = () => {
  let navigate = useNavigate();
  const onClick = (e: React.MouseEvent) => {
    // console.log(e.currentTarget.className);
    switch (e.currentTarget.className) {
      case "navToSet":
        navigate("/settings");
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
      <li className="navToSet" onClick={onClick}>
        <Icon name="settings" />
        <span>设置</span>
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
