const generateOutput = (text: string, output = "0") => {
  let numbers: number[] = [];
  console.log("numbers: " + numbers);
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
      //已经存在小数点了
      if (output.indexOf(".") >= 0) {
        return output;
      }
      return output + ".";
    case "+":
    case "-":
      numbers.push(parseFloat(output));
      console.log(numbers);
      if (numbers.length === 1) {
        numbers.push(parseFloat(output.split(text)[1]));
      }
      return output + text;
    case "清空":
      return "";
    default:
      return "";
  }
};
export { generateOutput };
