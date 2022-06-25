import { Icon } from "components/Icon";
import { Label } from "components/label";
import { useNavigate } from "react-router-dom";
import "styles/views/labels.scss";

const Labels = () => {
  const navigate = useNavigate();
  const onAddTag = () => {
    navigate("/newTag");
  };
  const onBackspace = () => {
    navigate("/home");
  };
  return (
    <div className="labels-layout">
      <header className="labelsHeader">
        <Icon name="backspace" onClick={onBackspace} />
        <div className="option">
          <span className="outcome">支出</span>
          <span className="income">收入</span>
        </div>
        <Icon name="add" onClick={onAddTag} />
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
