import { Icon } from "components/Icon";
import "styles/views/money/note.scss";

type Props = {
  note: string;
  onNoteChange: (note: string) => void;
  amount: string;
};

const NoteSection: React.FunctionComponent<Props> = props => {
  const onNoteChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    // console.log(e.target.value);
    props.onNoteChange(e.target.value);
  };
  return (
    <div className="note">
      <Icon name="pencil" />
      <input
        className="writeNote"
        type="text"
        placeholder="填写备注"
        value={props.note}
        onChange={onNoteChange}
      />
      {/* 这个应该是非受控组件，用户不能直接从这里输入数额，而是要通过与键盘的互动才能在这里显示数值 */}
      <div className="amount">￥{props.amount}</div>
    </div>
  );
};

export { NoteSection };
