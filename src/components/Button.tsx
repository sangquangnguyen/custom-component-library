import { AriaButtonProps } from "@react-types/button";
import React, { useRef } from "react";
import { useButton, useFocusRing, mergeProps } from "react-aria";
import classNames from "classnames";

type ButtonProps = AriaButtonProps<"button"> & {
  isLoading?: boolean;
  intent?: "normal" | "success" | "error";
  className?: string;
};

const generateButtonStyle = ({
  isDisabled = false,
  isPressed = false,
  isLoading = false,
  intent = "normal",
}: {
  isDisabled: boolean | undefined;
  isPressed: boolean | undefined;
  isLoading: boolean | undefined;
  intent: "normal" | "success" | "error" | undefined;
}) => {
  if (isDisabled) {
    return "bg-gray-400";
  }

  switch (intent) {
    case "success":
      if (isLoading) return "bg-success-700 pointer-events-none";
      if (isPressed) return "bg-success-700";
      return "bg-success-500";
    case "error":
      if (isLoading) return "bg-error-700 pointer-events-none";
      if (isPressed) return "bg-error-700";
      return "bg-error-500";

    default:
      if (isLoading) return "bg-primary-700 pointer-events-none";
      if (isPressed) return "bg-primary-700";
      return "bg-primary-500";
  }
};

const Button = (props: ButtonProps) => {
  const ref = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const { buttonProps, isPressed } = useButton(props, ref);
  const { focusProps, isFocusVisible } = useFocusRing();
  const backgroundStyle = generateButtonStyle({
    isDisabled: props.isDisabled,
    isPressed,
    intent: props.intent,
    isLoading: props.isLoading,
  });
  const className = classNames(
    backgroundStyle,
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
    "duration-150",
    "flex",
    "items-center",
    props.className
  );

  return (
    <button
      {...mergeProps(focusProps, buttonProps)}
      ref={ref}
      className={className}
    >
      {props.isLoading && (
        <svg
          className="mr-3 h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      {props.children}
    </button>
  );
};

export default Button;
