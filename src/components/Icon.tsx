import "styles/components/icon.scss";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext);
};
try {
  importAll(require.context("icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

interface Props extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<Props> = ({ name, ...restProps }) => {
  return (
    <svg className="icon">
      <use xlinkHref={"#" + name} {...restProps} />
    </svg>
  );
};

export { Icon };
