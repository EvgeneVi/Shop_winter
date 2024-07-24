import classnames from "utils/classnames";
import { CustomElement } from "types/types";
import "./Input.scss";
const typeEL = {
  checkbox: "inpt-check",
  text: "inpt-txt",
} as const;
// "checkbox" | "text"
const Input = ({
  type = "text",
  children,
  onChange = null,
  onClick = null,
  classes,
  ...attrs
}: CustomElement<keyof typeof typeEL>) => {
  // const baseClass = {
  //   checkbox: "inpt-check",
  //   text: "inpt-txt",
  // };

  const classList = classnames(typeEL[type], classes || "inpt-form");
  // console.log(classList);
  return (
    <>
      <label>{children}</label>
      <input
        type={type}
        onChange={onChange || undefined}
        className={classList}
        {...attrs}
      ></input>
    </>
  );
};

export default Input;
