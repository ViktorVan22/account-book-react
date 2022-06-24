import { Nav } from "./Nav";
import "styles/components/layout.scss";

interface Props {
  children: React.ReactNode;
}

const LayoutWithNav: React.FunctionComponent<Props> = props => {
  return (
    <div className="my-layout">
      <main>{props.children}</main>
      <footer>
        <Nav />
      </footer>
    </div>
  );
};

export { LayoutWithNav };
