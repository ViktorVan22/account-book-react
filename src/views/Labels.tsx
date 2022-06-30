import { Icon } from "components/Icon";
import { Label } from "components/Label";
import { useLabels } from "hooks/useLabels";
import { useNavigate } from "react-router-dom";
import "styles/views/labels.scss";

const Labels = () => {
  const { labels, editLabel, deleteLabel } = useLabels();
  if (labels) {
    console.log("labels: ", labels);
  }
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
        <div className="title">正在使用的标签</div>
        <Icon name="add" onClick={onAddTag} />
      </header>
      <main className="labelsMain">
        <p>支出</p>
        <ul>
          {labels &&
            labels.outcome.length !== 0 &&
            labels.outcome.map(label => (
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
        <p>收入</p>
        <ul>
          {labels &&
            labels.income.length !== 0 &&
            labels.income.map(label => (
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
