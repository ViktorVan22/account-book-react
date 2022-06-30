import { Icon } from "components/Icon";
import React, { Fragment, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "styles/views/newTag.scss";

const outcome = [
  "gift",
  "digital",
  "beverage",
  "pet",
  "makeup",
  "clothing",
  "payment",
  "loan",
  "giftMoney",
  "medical",
];
const income = ["dividends", "stocks", "wage"];
const availableIcons = { outcome, income };

type IconListProps = {
  category: "income" | "outcome";
};

const IconList: React.FunctionComponent<IconListProps> = props => {
  const iconNameList = availableIcons[props.category];

  const clickIconWrapper = (e: React.MouseEvent) => {
    const currentTarget = e.currentTarget as HTMLElement;
    const target = e.target as HTMLElement;
    const children = currentTarget.childNodes;
    console.log(target.children.item(0)); // 本质是返回一个Icon组件
    // 点击一个li，该li添加名为“selected”的className
    // 同时清空其他li上的classList
    target.classList.add("selected");
    children.forEach(el => {
      if (el !== target) {
        (el as HTMLElement).classList.remove("selected");
      }
    });
  };

  return (
    <Fragment>
      <div className="editTag">
        <div className="chosenIcon">选择的图标</div>
        <input type="text" placeholder="输入标签名称" />
      </div>
      <ul className="availableIcons" onClick={clickIconWrapper}>
        {iconNameList.map(iconName => (
          <li key={iconName}>
            <Icon name={iconName} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

const NewTag = () => {
  const navigate = useNavigate();
  return (
    <div className="newTag-layout">
      <header className="newTagHeader">
        <Icon
          name="cancel"
          onClick={() => {
            navigate("/labels");
          }}
        />
        <span>新增自定义分类</span>
        <Icon name="check" />
      </header>
      <main className="newTagMain">
        <div className="option">
          <NavLink to="/newTag/outcome">支出</NavLink>
          <NavLink to="/newTag/income">收入</NavLink>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

const OutcomeIcons: React.FunctionComponent = () => {
  return <IconList category="outcome" />;
};
const IncomeIcons: React.FunctionComponent = () => {
  return <IconList category="income" />;
};
export { OutcomeIcons, IncomeIcons };
export { NewTag };
