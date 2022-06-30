import { createId } from "methods/createId";
import { useEffect, useRef, useState } from "react";
import { useUpdate } from "./useUpdate";

type Labels = {
  outcome: Array<{ id: number; iconName: string; labelName: string }>;
  income: Array<{ id: number; iconName: string; labelName: string }>;
};

const defaultLabels: Labels = {
  outcome: [
    { id: createId(), iconName: "dining", labelName: "餐饮" },
    { id: createId(), iconName: "hangout", labelName: "出行" },
    { id: createId(), iconName: "motel", labelName: "住宿" },
    { id: createId(), iconName: "shopping", labelName: "购物" },
    { id: createId(), iconName: "snack", labelName: "零食" },
  ],
  income: [
    { id: createId(), iconName: "wage", labelName: "工资" },
    {
      id: createId(),
      iconName: "stocks",
      labelName: "股票收益",
    },
  ],
};

const useLabels = () => {
  const [labels, setLabels] = useState<Labels>({ outcome: [], income: [] });
  useEffect(() => {
    console.log("挂载数据");
    let localLabels = JSON.parse(
      window.localStorage.getItem("defaultLabels") || "{}"
    ); // 从localStorage获取数据
    console.log("localStorage: ", localLabels);
    if (
      !localLabels.hasOwnProperty("outcome") &&
      !localLabels.hasOwnProperty("income")
    ) {
      // 如果localStorage里没有标签数据
      console.log("设置localStorage");
      localLabels = window.localStorage.setItem(
        "defaultLabels",
        JSON.stringify(defaultLabels)
      );
      console.log("更新后的localStorage: ", localLabels);
    }
    setLabels(localLabels);
  }, []); // 从localStorage获取标签数据并挂载

  useUpdate(() => {
    window.localStorage.setItem("defaultLabels", JSON.stringify(labels));
  }, [labels]); // labels数据发生变化时调用: 把更新的labels数据存到localStorage

  const editLabel = () => {
    const content = window.prompt("请输入标签名");
    if (content !== null && content !== "") {
      // setLabels(labels.map(label=> label.id ===))
      console.log(content);
    }
  };
  const deleteLabel = (id: number) => {
    console.log("delete label");
    // setLabels(labels.filter(label => label.id !== id));
  };
  return { labels, editLabel, deleteLabel };
};

export { useLabels };
