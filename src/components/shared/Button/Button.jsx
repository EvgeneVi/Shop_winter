// import React from 'react'
import classnames from "../../../utils/classnames";
import "./Button.scss";
export default function Button({
  //   type,
  classes,
  children,
  onClick,
  active,
  disable = false,
  ...attrs
}) {
  const classList = classnames("btn-custom", classes, { disable });

  const onClickCustom = (e) => {
    if (disable) e.preventDefault();
    else if (onClick) return onClick(e);
  };

  let Tag = "div";

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
}
