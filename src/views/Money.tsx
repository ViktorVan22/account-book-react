import React from "react";
import { Icon } from "components/Icon";
import { Tag } from "components/Tag";
import { useNavigate } from "react-router-dom";

const Money = () => {
  const navigate = useNavigate();
  const onClickCancel = (e: React.MouseEvent) => {
    console.log(e.currentTarget);
    // navigate("/home", { replace: true });
  };
  return (
    <div>
      <header className="headerOption" onClick={onClickCancel}>
        <Icon name="cancel" />
      </header>
      <main className="tagList">
        <ul>
          <Tag name="dining" tagName="餐饮" />
          <Tag name="hangout" tagName="出行" />
          <Tag name="motel" tagName="住宿" />
          <Tag name="shopping" tagName="购物" />
        </ul>
      </main>
      <footer className="board">
        <div className="note">
          <Icon name="pencil" />
          <input type="text" placeholder="填写备注" />
          <input type="text" placeholder="￥0" />
        </div>
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
          <button className="backspaceSVG">backspace</button>
          <button className="checkSVG">check/submit</button>
        </div>
      </footer>
    </div>
  );
};

export { Money };
