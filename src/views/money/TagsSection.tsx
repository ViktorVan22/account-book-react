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
  return (
    <ul className="tags">
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
