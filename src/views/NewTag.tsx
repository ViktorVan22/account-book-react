import { Icon } from "components/Icon";
import { Fragment, useEffect, useState } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import "styles/views/newTag.scss";
import { NoMatch } from "./NoMatch";

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
  return (
    <Fragment>
      <div className="editTag">
        <div className="chosenIcon">选择的图标</div>
        <input type="text" placeholder="输入标签名称" />
      </div>
      <ul className="availableIcons">
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
  const [category, setCategory] = useState<"-" | "+">("-");
  const categoryMap = { "-": "支出", "+": "收入" };
  type Keys = keyof typeof categoryMap;
  const [categoryList] = useState<Keys[]>(["-", "+"]);
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
        <Routes>
          <Route index element={<OutcomeIcons />} />
          <Route path="outcome" element={<OutcomeIcons />} />
          <Route path="income" element={<IncomeIcons />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
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
