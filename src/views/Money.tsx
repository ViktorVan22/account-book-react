import { useState } from "react";
import { KeyboardSection } from "./money/KeyboardSection";
import { NoteSection } from "./money/NoteSection";
import { TagsSection } from "./money/TagsSection";
import { TopSection } from "./money/TopSection";
import "styles/views/money/money.scss";
const defaultFormData = {
  note: "",
  amount: "0",
};

const Money = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const onChange = (obj: Partial<typeof formData>) => {
    setFormData({
      ...formData,
      ...obj,
    });
  };
  return (
    <div className="money-layout">
      <header className="moneyHeader">
        <TopSection />
      </header>
      <main className="moneyMain">
        <TagsSection />
      </main>
      <footer className="moneyFooter">
        <NoteSection
          note={formData.note}
          onNoteChange={note => onChange({ note })}
          amount={formData.amount}
        />
        <KeyboardSection
          amount={formData.amount}
          onChange={amount => onChange({ amount })}
        />
      </footer>
    </div>
  );
};

export { Money };
