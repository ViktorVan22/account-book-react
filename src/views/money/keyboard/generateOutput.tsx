const generateOutput = (text: string, output = "0") => {
  const calOutput = (output: string, symbol: "-" | "+") => {
    let [a, b] = output.split(symbol);
    const eq = output + symbol;
    console.log(`表达式为: ${eq}`);
    console.log(`a: ${a}, b: ${b}`);
    if (b === "") {
      // 表达式最后两个符号相同的情况：94++, 12--, ...
      return (output + symbol).slice(0, -1);
    }
    if (b === undefined || b === null) {
      // 表达式最后两个符号不同的情况：94+-, 12-+, ...
      const [a1, a2] = a.split(/[-,+]/);
      if (!a2) {
        console.log(`a2: ${a2}`);
        a = a.slice(0, -1);
        const newOutput = a + symbol;
        console.log(`new output: ${newOutput}`);
        return newOutput;
      } else {
        // 数学表达式没有出现第二个数字之前，只能出现一个运算符号
        if (a.indexOf("-") > 0) {
          a = (
            Math.round((parseFloat(a1) - parseFloat(a2)) * 100) / 100
          ).toString();
        } else {
          a = (
            Math.round((parseFloat(a1) + parseFloat(a2)) * 100) / 100
          ).toString();
        }
        return a + symbol;
      }
    }
    switch (symbol) {
      case "-":
        return (
          (Math.round((parseFloat(a) - parseFloat(b)) * 100) / 100).toString() +
          symbol
        );
      case "+":
        return (
          (Math.round((parseFloat(a) + parseFloat(b)) * 100) / 100).toString() +
          symbol
        );
      default:
        return "bugReport: 运算表达式发生了异常错误";
    }
  };
  switch (text) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      if (output === "0") {
        return text;
      } else {
        return output + text;
      }
    case "backspace":
      if (output.length === 1) {
        return "";
      } else {
        return output.slice(0, -1);
      }
    case ".":
      //是否存在“+”，“-”运算符
      if (output.indexOf("-") >= 0 || output.indexOf("+") >= 0) {
        //表达式是否有了两个小数点
        if (output.split(".").length === 3) {
          return output;
        } else {
          return output + text;
        }
      } else {
        //是否是单个数字
        if (output.indexOf(".") >= 0) {
          return output;
        } else {
          return output + text;
        }
      }
    case "+":
    case "-":
      if (output === "0") {
        return "";
      }
      // 表达式里有运算符号
      if (output.indexOf("-") >= 0 || output.indexOf("+") >= 0) {
        return calOutput(output, text);
      } // 表达式里没有运算符号
      else {
        return output + text;
      }
    case "清空":
      return "";
    default:
      return "";
  }
};
export { generateOutput };
