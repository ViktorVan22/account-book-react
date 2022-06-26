import { useState } from "react";
import { DialogContainer } from "./Dialog";
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
      <DialogContainer />
    </li>
  );
};

export { Label };
