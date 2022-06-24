import { Icon } from "components/Icon";
import { useNavigate } from "react-router-dom";
import "styles/views/money/top.scss";

const TopSection = () => {
  const navigate = useNavigate();
  const onClickCancel = (e: React.MouseEvent) => {
    console.log(e.currentTarget);
    navigate("/home", { replace: true });
  };
  return (
    <div onClick={onClickCancel}>
      <Icon name="cancel" />
    </div>
  );
};

export { TopSection };
