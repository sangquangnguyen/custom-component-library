import { AriaButtonProps } from "@react-types/button";
import React, { useRef } from "react";
import { useButton, useFocusRing, mergeProps } from "react-aria";
import classNames from "classnames";

const Button = (props: AriaButtonProps<"button">) => {
  const ref = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const { buttonProps, isPressed } = useButton(props, ref);
  const { focusProps, isFocusVisible } = useFocusRing();
  const className = classNames(
    props.isDisabled
      ? "bg-gray-400"
      : isPressed
      ? "bg-primary-700"
      : "bg-primary-500",
    "text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded",
    "cursor-default",
    "focus:outline-none",
    isFocusVisible ? "shadow-outline" : "",
    "transition",
    "ease-in-out",
    "duration-150"
  );

  return (
    <button
      {...mergeProps(focusProps, buttonProps)}
      ref={ref}
      className={className}
    >
      {props.children}
    </button>
  );
};

export default Button;
