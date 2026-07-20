import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  {
    label,
    type = "text",
    className = "",
    placeholder,
    leftElement,
    rightElement,
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm text-gray-300"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {leftElement && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {leftElement}
          </div>
        )}

        {rightElement && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {rightElement}
          </div>
        )}

        <input
          id={id}
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...props}
          className={`
            w-full
            h-11
            rounded-xl
            bg-zinc-900
            border border-zinc-700
            text-white
            placeholder:text-gray-500
            outline-none
            transition-all duration-300
            focus:bg-zinc-900       
            focus:border-fuchsia-500 
            focus:ring-2 focus:ring-fuchsia-500/30
            px-3
            ${leftElement ? "pl-10" : ""}
            ${rightElement ? "pr-10" : ""}
            ${className}
          `}
        />
      </div>
    </div>
  );
});

Input.displayName = "Input";

export default Input;
