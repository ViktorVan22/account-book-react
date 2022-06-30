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

  const findCategory = (id: number) => {
    // 根据提供的id找到标签所属的数组的key: "outcome" | "income"
    const key = labels.outcome.filter(label => label.id === id);
    if (key.length === 0) {
      return "income";
    }
    return "outcome";
  };

  const findLabel = (id: number) => {
    // 根据提供的id获取对应的label对象, 返回一个含有category键值对的新对象
    const category = findCategory(id);
    let targetLabel;
    if (category === "outcome") {
      [targetLabel] = labels.outcome.filter(label => label.id === id);
    } else {
      [targetLabel] = labels.income.filter(label => label.id === id);
    }
    return { ...targetLabel, category };
  };

  const editLabel = (id: number) => {
    const targetLabel = findLabel(id);
    console.log("Target Label: ", targetLabel);
    let updatedLabels, filteredLabels;
    const content = window.prompt("请输入标签名");
    if (content !== null && content !== "") {
      targetLabel.labelName = content;
    }

    if (targetLabel.category === "outcome") {
      console.log("修改支出类标签");
      filteredLabels = labels.outcome.filter(label => label.id !== id);
      updatedLabels = [...filteredLabels, targetLabel];
      setLabels({
        outcome: updatedLabels,
        income: labels.income,
      });
    } else {
      console.log("修改收入类标签");
      filteredLabels = labels.income.filter(label => label.id !== id);
      updatedLabels = [...filteredLabels, targetLabel];
      setLabels({
        outcome: labels.outcome,
        income: updatedLabels,
      });
    }
    // console.log("updatedLabels: ", updatedLabels);
  };

  const deleteLabel = (id: number) => {
    console.log("删除标签， 标签id: ", id);
    const category = findCategory(id);
    console.log("标签所属类别: ", category);
    if (category === "outcome") {
      setLabels({
        outcome: labels.outcome.filter(label => label.id !== id),
        income: labels.income,
      });
    } else {
      setLabels({
        outcome: labels.outcome,
        income: labels.income.filter(label => label.id !== id),
      });
    }
  };
  return { labels, editLabel, deleteLabel };
};

export { useLabels };
