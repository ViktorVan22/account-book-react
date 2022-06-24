import "styles/components/icon.scss";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext);
};
try {
  importAll(require.context("icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

interface Props {
  name: string;
}

const Icon: React.FunctionComponent<Props> = props => {
  return (
    <svg className="icon">
      <use xlinkHref={"#" + props.name} />
    </svg>
  );
};

export { Icon };
