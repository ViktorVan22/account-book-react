import { Tag } from "components/Tag";
import "styles/views/money/tags.scss";
import { useLabels } from "views/Labels";

const TagsSection = () => {
  const { labels } = useLabels();

  return (
    <ul className="tags">
      {labels.map(label => (
        <Tag key={label.id} name={label.iconName} tagName={label.labelName} />
      ))}
    </ul>
  );
};

export { TagsSection };
