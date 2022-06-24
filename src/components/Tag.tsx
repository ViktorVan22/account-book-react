import { Icon } from "./Icon";
import "styles/components/tag.scss";

interface Props {
  name: string;
  tagName: string;
}

const Tag: React.FunctionComponent<Props> = props => {
  return (
    <li className="tag">
      <Icon name={props.name} />
      <span>{props.tagName}</span>
    </li>
  );
};

export { Tag };
