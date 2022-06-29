import { useState } from "react";
import { useLabels } from "views/Labels";
import { Dialog } from "./Dialog";
import { Icon } from "./Icon";

interface Props {
  id: number;
  iconName: string;
  labelName: string;
  deleteItem: (id: number) => void;
  editItem: () => void;
}

const Label: React.FunctionComponent<Props> = props => {
  return (
    <li className="label">
      <div className="labelContent">
        <Icon name={props.iconName} />
        <span>{props.labelName}</span>
      </div>
      <Options
        onDeleteItem={() => props.deleteItem(props.id)}
        onEditItem={() => props.editItem()}
      />
    </li>
  );
};

interface OptionsProps {
  onEditItem: () => void;
  onDeleteItem: () => void;
}

const Options: React.FunctionComponent<OptionsProps> = props => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="optionIcon" onClick={() => setVisible(!visible)}>
      <Icon name="options" />
      <Dialog visible={visible}>
        <span className="editLabel" onClick={props.onEditItem}>
          编辑
        </span>
        <span className="deleteLabel" onClick={props.onDeleteItem}>
          删除
        </span>
      </Dialog>
    </div>
  );
};

export { Label };
