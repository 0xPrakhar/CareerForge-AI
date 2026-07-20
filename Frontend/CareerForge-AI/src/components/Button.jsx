import { forwardRef } from "react";

const variantStyles = {
  primary:
    "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/50 hover:opacity-90",
  ghost:
    "bg-transparent text-slate-300 hover:bg-white/5 hover:text-white",
  outline:
    "bg-transparent border border-white text-white hover:bg-white hover:text-slate-900",
  secondary:
    "bg-white text-slate-900 hover:bg-slate-100",
};

const sizeStyles = {
  default: "px-5 py-3 rounded-xl flex items-center justify-center gap-2", 
  icon: "size-9 rounded-full flex items-center justify-center", 
};

const Button = forwardRef(function Button(
  {
    type = "button",
    variant = "primary",
    size = "default",
    className = "",
    disabled = false,
    children,
    ...props
  },
  ref
) {
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "";

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabledStyles}
        transition-all duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
