import { Icon } from "./Icon";

interface Props {
  iconName: string;
  labelName: string;
}

const Label: React.FunctionComponent<Props> = props => {
  return (
    <li className="label">
      <div className="labelContent">
        <Icon name={props.iconName} />
        <span>{props.labelName}</span>
      </div>
      <Icon name="options" />
    </li>
  );
};

export { Label };
