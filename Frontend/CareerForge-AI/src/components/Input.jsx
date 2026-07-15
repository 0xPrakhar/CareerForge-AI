import React, { useId } from 'react'

// forwardRef allows parent components to access this input directly.
// Example: inputRef.current.focus()
const Input = React.forwardRef(function Input(

  // Destructuring props
 {
  label,
  type = "text",
  className = "",
  placeholder,
  leftElement,
  rightElement,
  ...props
},

  // Ref coming from parent component
  ref

) {

  // Creates a unique ID for connecting label and input
  const id = useId()

  return (

    // Takes full available width
    <div className="w-full">

      {/* Show label only if label exists */}
      {label && (
        <label
          htmlFor={id} // Connects label to input
          className="block mb-2 text-sm text-gray-300"
        >
          {label}
        </label>
      )}
      
      <div className="relative">
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    ref={ref}
    {...props}
    className={`
      w-full
      px-4
      py-3
      pr-16
      rounded-xl
      bg-zinc-900
      border border-zinc-700
      text-white
      placeholder:text-gray-500
      outline-none
      transition-all
      duration-300
      focus:border-red-500
      focus:ring-2
      focus:ring-red-500/30
      ${className}
    `}
  />

  {rightElement && (
    <div className="absolute right-4 top-1/2 -translate-y-1/2">
      {rightElement}
    </div>
  )}
  
  {leftElement && (
    <div className="absolute left-4 top-1/2 -translate-y-1/2">
      {leftElement}
    </div>
  )}
</div>
    </div>
  )
})

// Helps React DevTools show "Input" instead of "ForwardRef"
Input.displayName = 'Input'

export default Input