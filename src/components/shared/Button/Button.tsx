import { MouseEvent } from "react";
import { CustomElement } from "types/types";
import classnames from "utils/classnames";
import "./Button.scss";

const enum typeEL {
  button,
  submit,
}
const Button = ({
  classes = "",
  children,
  onClick = null,
  active,
  disable = false,
  ...attrs
}: CustomElement<keyof typeof typeEL>) => {
  const classList = classnames("btn-custom", classes, { disable });

  const onClickCustom = (e: MouseEvent): typeof onClick | void => {
    if (disable) e.preventDefault();
    else if (onClick) return onClick(e);
  };

  let Tag: any = "div";

  switch (true) {
    case attrs.href !== undefined:
      // console.log(attrs.href, attrs.href !== undefined);
      Tag = "a";
      break;
    case attrs.type !== undefined:
      Tag = "button";
  }

  return (
    <Tag className={classList} onClick={onClickCustom} {...attrs}>
      {children}
    </Tag>
  );
};
export default Button;
