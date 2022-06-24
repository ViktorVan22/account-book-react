import { Tag } from "components/Tag";

const TagsSection = () => {
  return (
    <main className="tagList">
      <ul>
        <Tag name="dining" tagName="餐饮" />
        <Tag name="hangout" tagName="出行" />
        <Tag name="motel" tagName="住宿" />
        <Tag name="shopping" tagName="购物" />
      </ul>
    </main>
  );
};

export { TagsSection };
