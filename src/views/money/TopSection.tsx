import { Icon } from "components/Icon";

const TopSection = () => {
  const onClickCancel = (e: React.MouseEvent) => {
    console.log(e.currentTarget);
  };
  return (
    <div onClick={onClickCancel}>
      <Icon name="cancel" />
    </div>
  );
};

export { TopSection };
