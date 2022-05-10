import React, { useRef } from "react";
import { AriaTextFieldOptions, useTextField } from "@react-aria/textfield";

type TextFieldPropsType = AriaTextFieldOptions<"input"> & {
  status?: "normal" | "success" | "error";
};

const TextField = (props: TextFieldPropsType) => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { labelProps, inputProps, descriptionProps } = useTextField(props, ref);

  return (
    <div className="mb-4">
      <label
        className="form-label inline-block mb-2 text-gray-700"
        {...labelProps}
      >
        {props.label}
      </label>
      <input
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        {...inputProps}
      />
      {props.description && (
        <div {...descriptionProps} className="text-sm text-gray-500 mt-1">
          {props.description}
        </div>
      )}
    </div>
  );
};

export default TextField;
