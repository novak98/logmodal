import React from "react";

export const Button = (props) => {
  return (
    <button className={props.className} {...props}>
      {props.title}
    </button>
  );
};
