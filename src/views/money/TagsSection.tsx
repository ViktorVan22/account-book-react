import { Tag } from "components/Tag";
import "styles/views/money/tags.scss";

const TagsSection = () => {
  return (
    <ul className="tags">
      <Tag name="dining" tagName="餐饮" />
      <Tag name="hangout" tagName="出行" />
      <Tag name="motel" tagName="住宿" />
      <Tag name="shopping" tagName="购物" />
      <Tag name="snack" tagName="零食" />
    </ul>
  );
};

export { TagsSection };
