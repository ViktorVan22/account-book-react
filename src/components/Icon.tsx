import x from "icons/settings.svg";
import "styles/components/icon.scss";

console.log(x);
const Icon = () => {
  return (
    <svg className="icon">
      <use xlinkHref="#settings" />
    </svg>
  );
};

export { Icon };
