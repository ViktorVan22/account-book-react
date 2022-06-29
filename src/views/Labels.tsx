import { Icon } from "components/Icon";
import { Label } from "components/Label";
import { useUpdate } from "hooks/useUpdate";
import { createId } from "methods/createId";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "styles/views/labels.scss";

const defaultLabels = [
  { id: createId(), iconName: "dining", labelName: "餐饮" },
  { id: createId(), iconName: "hangout", labelName: "出行" },
  { id: createId(), iconName: "motel", labelName: "住宿" },
  { id: createId(), iconName: "shopping", labelName: "购物" },
  { id: createId(), iconName: "snack", labelName: "零食" },
];

const useLabels = () => {
  const [labels, setLabels] = useState<
    {
      id: number;
      iconName: string;
      labelName: string;
    }[]
  >([]);
  useEffect(() => {
    console.log("挂载数据");
    setLabels(defaultLabels);
  }, []); // 挂载标签数据

  const counter = useRef(0);
  useEffect(() => {
    counter.current += 1;
  });
  useEffect(() => {
    if (counter.current > 1) {
      console.log("我被调用了");
    }
  }, [labels]); // labels数据发生变化时调用
  const editLabel = () => {
    console.log(`edit label`);
  };
  const deleteLabel = (id: number) => {
    console.log("delete label");
    // console.log(labels.filter(label => label.id !== id));
    setLabels(labels.filter(label => label.id !== id));
  };
  console.log(labels);
  return { labels, editLabel, deleteLabel };
};

const Labels = () => {
  const { labels, editLabel, deleteLabel } = useLabels();
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
              id={label.id}
              iconName={label.iconName}
              labelName={label.labelName}
              deleteItem={deleteLabel}
              editItem={editLabel}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};
export { useLabels };
export { Labels };
