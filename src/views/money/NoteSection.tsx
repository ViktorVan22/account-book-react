import { Icon } from "components/Icon";

const NoteSection = () => {
  return (
    <div className="note">
      <Icon name="pencil" />
      <input type="text" placeholder="填写备注" />
      <input type="text" placeholder="￥0" />
    </div>
  );
};

export { NoteSection };
