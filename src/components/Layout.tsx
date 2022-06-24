import { Nav } from "./Nav";
import "styles/components/layout.scss";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = props => {
  return (
    <div className="my-layout">
      <main>{props.children}</main>
      <footer>
        <Nav />
      </footer>
    </div>
  );
};

export { Layout };
