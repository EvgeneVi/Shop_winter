// import React from 'react'

import classnames from "../../../utils/classnames";
import "./Input.scss";

export default function Input({
  type = "text",
  children,
  onChange,
  classes,
  ...attrs
}) {
  const baseClass = {
    checkbox: "inpt-check",
    text: "inpt-txt",
  };
  const classList = classnames(baseClass[type], classes || "inpt-form");
  // console.log(classList);
  return (
    <>
      <label>{children}</label>
      <input
        type={type}
        {...attrs}
        onChange={onChange}
        className={classList}
      ></input>
    </>
  );
}
