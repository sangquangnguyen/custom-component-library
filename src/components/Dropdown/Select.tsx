import * as React from "react";
import type { AriaSelectProps } from "@react-types/select";
import { useSelectState } from "react-stately";
import {
  useSelect,
  HiddenSelect,
  useButton,
  mergeProps,
  useFocusRing,
} from "react-aria";
import { SelectorIcon } from "@heroicons/react/solid";

import ListBox from "./ListBox";
import Popover from "./Popover";

const Select = <T extends object>(props: AriaSelectProps<T>) => {
  const state = useSelectState(props);

  const ref = React.useRef(null);
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref
  );

  const { buttonProps } = useButton(triggerProps, ref);

  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div className="inline-flex flex-col relative w-full mb-4">
      <div
        {...labelProps}
        className="block text-sm font-medium text-typo-base text-left cursor-default"
      >
        {props.label}
      </div>
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <button
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        className={`p-1 pl-3 py-1 relative inline-flex flex-row items-center justify-between rounded-md overflow-hidden cursor-default shadow-sm border outline-none ${
          isFocusVisible ? "border-primary-500" : "border-gray-300"
        } ${state.isOpen ? "bg-gray-100" : "bg-white"}`}
      >
        <span
          {...valueProps}
          className={`text-md ${
            state.selectedItem ? "text-typo-base" : "text-typo-muted"
          }`}
        >
          {state.selectedItem
            ? state.selectedItem.rendered
            : "Select an option"}
        </span>
        <SelectorIcon
          className={`w-5 h-5 ${
            isFocusVisible ? "text-primary-500" : "text-typo-muted"
          }`}
        />
      </button>
      {state.isOpen && (
        <Popover isOpen={state.isOpen} onClose={state.close}>
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </div>
  );
};

export default Select;
