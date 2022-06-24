import { Icon } from "./Icon";

interface Props {
  name: string;
  tagName: string;
}

const Tag: React.FunctionComponent<Props> = props => {
  return (
    <li>
      <Icon name={props.name} />
      <span>{props.tagName}</span>
    </li>
  );
};

export { Tag };
