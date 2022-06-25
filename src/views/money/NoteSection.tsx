import { Icon } from "components/Icon";
import "styles/views/money/note.scss";

type Props = {
  note: string;
  onNoteChange: (note: string) => void;
  amount: number;
  onAmountChange: (amount: number) => void;
};

const NoteSection: React.FunctionComponent<Props> = props => {
  const onNoteChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    // console.log(e.target.value);
    props.onNoteChange(e.target.value);
  };

  const onAmountChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    console.log(e);
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
      <input
        className="amount"
        type="text"
        placeholder="￥0"
        value={props.amount}
        onChange={onAmountChange}
      />
    </div>
  );
};

export { NoteSection };
