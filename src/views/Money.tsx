import { CategorySection } from "./money/CategorySection";
import { KeyboardSection } from "./money/KeyboardSection";
import { NoteSection } from "./money/NoteSection";
import { TagsSection } from "./money/TagsSection";
import { TopSection } from "./money/TopSection";

const Money = () => {
  return (
    <div>
      <header className="headerOption">
        <TopSection />
      </header>
      <main className="tagList">
        <CategorySection />
        <TagsSection />
      </main>
      <footer className="board">
        <NoteSection />
        <KeyboardSection />
      </footer>
    </div>
  );
};

export { Money };
