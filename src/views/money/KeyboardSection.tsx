import { Icon } from "components/Icon";
import React, { useState } from "react";
import "styles/views/money/keyboard.scss";
import { generateOutput } from "./keyboard/generateOutput";

type Props = {
  amount: string;
  onChange: (amount: string) => void;
  onOk?: () => void;
};

const KeyboardSection: React.FunctionComponent<Props> = props => {
  const [output, _setOutput] = useState(props.amount);
  const setOutput = (output: string) => {
    let newOutput: string;
    if (output.length > 15) {
      newOutput = output.slice(0, 15);
    } else if (output.length === 0) {
      newOutput = "0";
    } else {
      newOutput = output;
    }
    _setOutput(newOutput);
    props.onChange(newOutput);
  };

  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    let text = target.textContent;
    if (!text) {
      text = target.className;
    }
    if (text === "check") {
      if (props.onOk) {
        props.onOk();
      }
      return;
    }
    // console.log(text);
    // console.log(document.body.querySelector("footer > div.keyboard"));
    if (
      "0123456789."
        .split("")
        .concat(["+", "-", "backspace", "清空"])
        .indexOf(text) >= 0
    ) {
      setOutput(generateOutput(text, output));
    }
  };

  return (
    <div className="keyboard" onClick={onClickButtonWrapper}>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className="clear">清空</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className="plus">+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="minus">-</button>
      <button>.</button>
      <button>0</button>
      <button className="backspace">
        <Icon name="deleteBackspace" />
      </button>
      <button className="check">
        <Icon name="check" />
      </button>
    </div>
  );
};

export { KeyboardSection };
