import { Icon } from "components/Icon";
import { useNavigate } from "react-router-dom";
import "styles/views/newTag.scss";

const NewTag = () => {
  const navigate = useNavigate();
  return (
    <div className="newTag-layout">
      <header className="newTagHeader">
        <Icon
          name="cancel"
          onClick={() => {
            navigate("/labels");
          }}
        />
        <span>新增自定义分类</span>
        <Icon name="check" />
      </header>
      <main className="newTagMain">
        <div className="option">
          <span>支出</span>
          <span>收入</span>
        </div>
        <div className="editTag">
          <div className="chosenIcon">选择的图标</div>
          <input type="text" placeholder="输入标签名称" />
        </div>
        <ul className="availableIcons">
          <li>
            <Icon name="dining" />
          </li>
          <li>
            <Icon name="snack" />
          </li>
          <li>
            <Icon name="motel" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
          <li>
            <Icon name="shopping" />
          </li>
        </ul>
      </main>
    </div>
  );
};

export { NewTag };
