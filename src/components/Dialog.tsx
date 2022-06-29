import { Fragment, useState } from "react";
import { Icon } from "./Icon";
import "styles/components/dialog.scss";

type dialogProps = {
  visible: boolean;
  children: React.ReactNode;
};

const Dialog: React.FunctionComponent<dialogProps> = props => {
  return props.visible ? (
    <Fragment>
      <div className="labelDialogMask"></div>
      <div className="labelDialog">{props.children}</div>
    </Fragment>
  ) : null;
};

export { Dialog };
