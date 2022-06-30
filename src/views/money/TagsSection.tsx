import { Tag } from "components/Tag";
import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "styles/views/money/tags.scss";
import { useLabels } from "views/Labels";

type LabelListProps = {
  labels: Array<{ id: number; iconName: string; labelName: string }>;
};
const LabelList: React.FunctionComponent<LabelListProps> = props => {
  const labels = props.labels;
  let tagElement;
  const clickIconWrapper = (e: React.MouseEvent) => {
    const currentTarget = e.currentTarget as HTMLElement;
    const target = e.target as HTMLElement;
    const children = currentTarget.childNodes;
    // console.log(target.children.item(0)); // 本质是返回一个Icon组件
    tagElement = target.children;
    console.log(tagElement);
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
    <ul className="tags" onClick={clickIconWrapper}>
      {labels.map(label => (
        <Tag key={label.id} name={label.iconName} tagName={label.labelName} />
      ))}
    </ul>
  );
};

const OutcomeLabels: React.FunctionComponent = () => {
  const { labels } = useLabels();
  const { outcome } = labels;
  return <LabelList labels={outcome} />;
};
const IncomeLabels: React.FunctionComponent = () => {
  const { labels } = useLabels();
  const { income } = labels;
  return <LabelList labels={income} />;
};

const TagsSection = () => {
  return (
    <Fragment>
      <ul className="category">
        <NavLink to="outcome">支出</NavLink>
        <NavLink to="income">收入</NavLink>
      </ul>
      <Outlet />
    </Fragment>
  );
};

export { OutcomeLabels, IncomeLabels };
export { TagsSection };
