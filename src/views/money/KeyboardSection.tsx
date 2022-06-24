import { Icon } from "components/Icon";
import "styles/views/money/keyboard.scss";

const KeyboardSection = () => {
  return (
    <div className="keyboard">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className="date">今天</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className="plusSVG">+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="minusSVG">-</button>
      <button>.</button>
      <button>0</button>
      <button className="backspaceSVG">
        <Icon name="deleteBackspace" />
      </button>
      <button className="checkSVG">
        <Icon name="check" />
      </button>
    </div>
  );
};

export { KeyboardSection };
