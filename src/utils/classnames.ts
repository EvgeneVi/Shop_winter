//объеденение классов
import { BoxTypes } from "types/types";
export default (...args: (string | boolean | BoxTypes<boolean>)[]) => {
  let str = "";
  for (let i = 0; i < args.length; i++) {
    let arg = args[i];
    if (typeof arg === "string") {
      str = `${str} ${arg}`;
    }
    if (typeof arg === "object") {
      Object.keys(arg).forEach((key) => {
        if (arg[key] === true) str = `${str} ${key}`;
      });
    }
  }
  return str.trim();
};
// f("btn", "sas", { active: true });
// console.log(f("btn", "sas", { active: true }));
