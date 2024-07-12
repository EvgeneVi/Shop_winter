import { ReactNode, MouseEvent } from "react";
import classnames from "utils/classnames";
import "./Button.scss";

type ButtonType = {
  classes: string;
  children?: ReactNode | string;
  onClick?: (e: MouseEvent) => void;
  active?: boolean;
  disable?: boolean;
  [key: string]: any;
};

const Button = ({
  //   type,
  classes,
  children,
  onClick,
  active,
  disable = false,
  ...attrs
}: ButtonType) => {
  const classList = classnames("btn-custom", classes, { disable });

  const onClickCustom = (e: MouseEvent): any => {
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
