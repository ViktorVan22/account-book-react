import { Icon } from "./Icon";

const Nav = () => {
  return (
    <ul>
      <li>
        <Icon name="settings" />
        <span>设置</span>
      </li>
      <li>
        <Icon name="circleFilledPlus" />
        <span>记一笔</span>
      </li>
      <li>
        <Icon name="chart" />
        <span>统计</span>
      </li>
    </ul>
  );
};

export { Nav };
