import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NoMatch = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Oops..! 来到了陌生的地方，即将跳转回首页...</div>;
};

export { NoMatch };
