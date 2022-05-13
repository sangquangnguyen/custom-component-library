import React from "react";
import type { ComboBoxProps } from "@react-types/combobox";
import { useComboBoxState } from "react-stately";
import { useComboBox, useFilter, useButton } from "react-aria";
import { ChevronDownIcon } from "@heroicons/react/solid";

import ListBox from "./ListBox";
import Popover from "./Popover";

const ComboBox = <T extends object>(
  props: ComboBoxProps<T> & {
    className?: string;
  }
) => {
  const { contains } = useFilter({ sensitivity: "base" });
  const state = useComboBoxState({ ...props, defaultFilter: contains });

  const buttonRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const listBoxRef = React.useRef(null);
  const popoverRef = React.useRef(null);

  const {
    buttonProps: triggerProps,
    inputProps,
    listBoxProps,
    labelProps,
  } = useComboBox(
    {
      ...props,
      inputRef,
      buttonRef,
      listBoxRef,
      popoverRef,
    },
    state
  );

  const { buttonProps } = useButton(triggerProps, buttonRef);

  return (
    <div className="inline-flex flex-col relative w-full mb-4">
      <label
        {...labelProps}
        className="form-label block text-sm leading-5 font-medium text-gray-700"
      >
        {props.label}
      </label>
      <div
        className={`relative inline-flex flex-row rounded overflow-hidden shadow-sm border ${
          state.isFocused ? "border-primary-500" : "border-gray-300"
        }`}
      >
        <input
          {...inputProps}
          ref={inputRef}
          className="outline-none px-3 py-1 w-full"
        />
        <button
          {...buttonProps}
          ref={buttonRef}
          className={`px-1 bg-gray-100 cursor-default border-l ${
            state.isFocused
              ? "border-primary-500 text-primary-600"
              : "border-gray-300 text-gray-500"
          }`}
        >
          <ChevronDownIcon className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
      {state.isOpen && (
        <Popover
          popoverRef={popoverRef}
          isOpen={state.isOpen}
          onClose={state.close}
        >
          <ListBox {...listBoxProps} listBoxRef={listBoxRef} state={state} />
        </Popover>
      )}
    </div>
  );
};

export default ComboBox;
