import { Icon } from "components/Icon";
import React from "react";
import "styles/views/money/keyboard.scss";
import { generateOutput } from "./keyboard/generateOutput";

const KeyboardSection = () => {
  return (
    <div className="keyboard" onClick={generateOutput}>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className="date">今天</button>
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
