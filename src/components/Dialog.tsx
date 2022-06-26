import { useState } from "react";
import { Icon } from "./Icon";

type dialogProps = {
  visible: boolean;
};

const Dialog: React.FunctionComponent<dialogProps> = props => {
  return props.visible ? (
    <div>
      <span>编辑</span>
      <span>删除</span>
    </div>
  ) : null;
};

const DialogContainer = () => {
  const [visible, setVisible] = useState(false);
  const onOpen = () => {
    setVisible(!visible);
  };
  return (
    <div className="optionIcon" onClick={onOpen}>
      <Icon name="options" />
      <Dialog visible={visible} />
    </div>
  );
};

export { DialogContainer };
