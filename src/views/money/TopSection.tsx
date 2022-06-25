import { Icon } from "components/Icon";
import { useNavigate } from "react-router-dom";
import "styles/views/money/top.scss";

const TopSection = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/home", { replace: true });
      }}
    >
      <Icon name="cancel" />
    </div>
  );
};

export { TopSection };
