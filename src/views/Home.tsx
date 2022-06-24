import { Icon } from "components/Icon";
import { Layout } from "components/Layout";
import "styles/views/home.scss";

const Home = () => {
  return (
    <Layout>
      <header>本月</header>
      <aside>
        <ul>
          <li>
            <span>￥153</span>
            <span>支出</span>
          </li>
          <li>
            <span>￥0</span>
            <span>收入</span>
          </li>
        </ul>
      </aside>
      <main className="records">
        <div className="date today">
          <span>今天</span>
          <ul>
            <li>
              <Icon name="hangout" />
              <span className="tagName">出行</span>
              <span className="amount">-1354</span>
              <span className="note">因公出差</span>
              <span className="createdAt">21:50</span>
            </li>
            <li>
              <Icon name="dining" />
              <span className="tagName">餐饮</span>
              <span className="amount">-25.8</span>
              <span className="note">和同事吃麻辣烫</span>
              <span className="createdAt">13:40</span>
            </li>
          </ul>
        </div>
        <div className="date yesterday">
          <span>昨天</span>
          <ul>
            <li>
              <Icon name="dining" />
              <span className="tagName">motel</span>
              <span className="amount">-555</span>
              <span className="note">酒店住宿</span>
              <span className="createdAt">18:37</span>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export { Home };
