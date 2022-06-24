import { Icon } from "components/Icon";
import "styles/views/money/note.scss";
const NoteSection = () => {
  return (
    <div className="note">
      <Icon name="pencil" />
      <input className="writeNote" type="text" placeholder="填写备注" />
      <input className="amount" type="text" placeholder="￥0" />
    </div>
  );
};

export { NoteSection };
