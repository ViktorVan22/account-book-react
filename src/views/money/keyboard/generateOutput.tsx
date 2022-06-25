const generateOutput = (e: React.MouseEvent) => {
  const target = e.target as HTMLElement;
  let text = target.textContent;
  if (!text) {
    text = target.className;
  }
  console.log(text);
  switch (text) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case ".":
    case "backspace":
    case "check":
    case "+":
    case "-":
    case "date":
    default:
      break;
  }
};
export { generateOutput };
