import { Fragment, useState } from "react";
import { Icon } from "./Icon";
import "styles/components/dialog.scss";

type dialogProps = {
  visible: boolean;
};

const Dialog: React.FunctionComponent<dialogProps> = props => {
  const editLabel = () => {
    window.alert("编辑标签？");
  };
  const deleteLabel = () => {
    window.alert("删除标签？");
  };
  return props.visible ? (
    <Fragment>
      <div className="labelDialogMask"></div>
      <div className="labelDialog">
        <span className="editLabel" onClick={editLabel}>
          编辑
        </span>
        <span className="deleteLabel" onClick={deleteLabel}>
          删除
        </span>
      </div>
    </Fragment>
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
