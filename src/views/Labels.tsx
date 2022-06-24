import { Icon } from "components/Icon";
import { Label } from "components/label";
import "styles/views/labels.scss";

const Labels = () => {
  return (
    <div className="labels-layout">
      <header className="labelsHeader">
        <Icon name="backspace" />
        <div className="option">
          <span className="outcome">支出</span>
          <span className="income">收入</span>
        </div>
        <Icon name="add" />
      </header>
      <main className="labelsMain">
        <p>正在使用</p>
        <ul>
          <Label iconName="dining" labelName="餐饮" />
          <Label iconName="hangout" labelName="出行" />
          <Label iconName="motel" labelName="住宿" />
          <Label iconName="shopping" labelName="购物" />
          <Label iconName="snack" labelName="零食" />
        </ul>
      </main>
    </div>
  );
};

export { Labels };
