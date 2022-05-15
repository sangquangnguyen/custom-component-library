import { AriaButtonProps } from "@react-types/button";
import React, { useRef } from "react";
import { useButton, useFocusRing, mergeProps } from "react-aria";
import classNames from "classnames";

type ButtonProps = AriaButtonProps<"button"> & {
  isLoading?: boolean;
  intent?: "normal" | "success" | "error";
  className?: string;
  variant?: "filled" | "link";
};

const generateIntentStyle = (
  intent: "normal" | "success" | "error",
  isDisabled: boolean
) => {
  if (isDisabled) return "gray";

  switch (intent) {
    case "success":
      return "success";
    case "error":
      return "error";
    default:
      return "primary";
  }
};

const generateStateStyle = ({
  isDisabled,
  isPressed,
  isLoading,
}: {
  isDisabled: boolean;
  isPressed: boolean;
  isLoading: boolean;
}) => {
  if (isDisabled) {
    return "400";
  }

  if (isLoading) {
    return "700";
  }

  if (isPressed) {
    return "700";
  }

  return "500";
};

const generateButtonStyle = ({
  isDisabled = false,
  isPressed = false,
  isLoading = false,
  intent = "normal",
  variant = "filled",
}: {
  isDisabled: boolean | undefined;
  isPressed: boolean | undefined;
  isLoading: boolean | undefined;
  intent: "normal" | "success" | "error" | undefined;
  variant?: "filled" | "link" | undefined;
}) => {
  const variantStyle = variant === "filled" ? "bg" : "text";
  const intentStyle = generateIntentStyle(intent, isDisabled);
  const stateStyle = generateStateStyle({ isDisabled, isLoading, isPressed });

  return classNames(
    `${variantStyle}-${intentStyle}-${stateStyle}`,
    isLoading ? "pointer-events-none" : undefined,
    variant === "filled" ? "text-white" : undefined
  );
};

const Button = (props: ButtonProps) => {
  const ref = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const { buttonProps, isPressed } = useButton(props, ref);
  const { focusProps, isFocusVisible } = useFocusRing();
  const buttonCustomStyle = generateButtonStyle({
    isDisabled: props.isDisabled,
    isPressed,
    intent: props.intent,
    isLoading: props.isLoading,
    variant: props.variant,
  });

  const className = classNames(
    buttonCustomStyle,
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
          className="mr-3 h-5 w-5 animate-spin"
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
            strokeWidth="4"
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
