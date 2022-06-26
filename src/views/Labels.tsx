import { Icon } from "components/Icon";
import { Label } from "components/Label";
import { CreateId } from "methods/createId";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "styles/views/labels.scss";

const useLabels = () => {
  const [labels, setLabels] = useState<
    {
      id: number;
      iconName: string;
      labelName: string;
    }[]
  >([]);
  useEffect(() => {
    let localLabels = JSON.parse(
      window.localStorage.getItem("labelList") || "[]"
    );
    if (localLabels.length === 0) {
      localLabels = [
        { id: CreateId(), iconName: "dining", labelName: "餐饮" },
        { id: CreateId(), iconName: "hangout", labelName: "出行" },
        { id: CreateId(), iconName: "motel", labelName: "住宿" },
        { id: CreateId(), iconName: "shopping", labelName: "购物" },
        { id: CreateId(), iconName: "snack", labelName: "零食" },
      ];
      window.localStorage.setItem("localLabels", JSON.stringify(localLabels));
      setLabels(localLabels);
    }
  }, []); // 首次挂载时填充标签数据

  return { labels };
};

const Labels = () => {
  const { labels } = useLabels();
  // console.log(labels);
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
          {labels.map(label => (
            <Label
              key={label.id}
              iconName={label.iconName}
              labelName={label.labelName}
            />
          ))}
          {/* <Label iconName="dining" labelName="餐饮" />
          <Label iconName="hangout" labelName="出行" />
          <Label iconName="motel" labelName="住宿" />
          <Label iconName="shopping" labelName="购物" />
          <Label iconName="snack" labelName="零食" /> */}
        </ul>
      </main>
    </div>
  );
};

export { Labels };
