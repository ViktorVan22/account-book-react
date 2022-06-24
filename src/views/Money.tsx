import { CategorySection } from "./money/CategorySection";
import { KeyboardSection } from "./money/KeyboardSection";
import { NoteSection } from "./money/NoteSection";
import { TagsSection } from "./money/TagsSection";
import { TopSection } from "./money/TopSection";

const Money = () => {
  return (
    <div>
      <header className="moneyTop">
        <TopSection />
      </header>
      <main className="moneyMain">
        <CategorySection />
        <TagsSection />
      </main>
      <footer className="moneyFooter">
        <NoteSection />
        <KeyboardSection />
      </footer>
    </div>
  );
};

export { Money };
