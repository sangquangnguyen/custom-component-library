import React, { useRef } from "react";
import { AriaTextFieldOptions, useTextField } from "@react-aria/textfield";
import classNames from "classnames";

type TextFieldPropsType = AriaTextFieldOptions<"input"> & {
  invalid?: boolean;
};

const TextField = (props: TextFieldPropsType) => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  const inputClassname = classNames(
    props.isDisabled ? "bg-gray-200" : "bg-white",
    "form-control",
    "block",
    "w-full",
    "px-3",
    "py-1.5",
    "text-base",
    "font-normal",
    "text-typo-base",
    "bg-clip-padding",
    "border",
    "border-solid",
    props.invalid ? "border-error-500" : "border-gray-300",
    "rounded",
    "transition",
    "ease-in-out",
    "m-0",
    "focus:text-typo-base",
    "focus:bg-white",
    "focus:border-blue-600",
    "focus:outline-none"
  );

  const labelClassname = classNames(
    "form-label",
    "block",
    "text-sm",
    "leading-5",
    "font-medium",
    props.invalid ? "text-error-500" : "text-typo-base"
  );

  return (
    <div className="mb-4">
      <label className={labelClassname} {...labelProps}>
        {props.label}
      </label>
      <input className={inputClassname} {...inputProps} />
      {props.description && (
        <div {...descriptionProps} className="text-sm text-typo-muted mt-1">
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div {...errorMessageProps} className="text-sm text-error-500 mt-1">
          {props.errorMessage}
        </div>
      )}
    </div>
  );
};

export default TextField;
