import  { forwardRef } from 'react'

const variantStyles = {
  primary:
    'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/50',
  ghost:
    'bg-transparent text-slate-300 hover:bg-white/5 hover:text-white',
  outline:
    'bg-transparent border border-white text-white hover:bg-white hover:text-slate-900',
  secondary:
    'bg-white text-slate-900 hover:bg-slate-100',
};


const sizeStyles = {
  default: 'px-5 py-3 rounded-xl', // TODO: px-*, py-* for normal text+icon buttons
  icon: 'size-9 rounded-full',    // TODO: equal width/height, rounded-full, no text padding
}

const Button = forwardRef(function Button(
  {
    type = 'button',
    variant = 'primary',
    size = 'default',
    className = '',
    disabled = false,
    children,
    ...props
  },
  ref
) {
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '' // TODO: opacity/cursor-not-allowed when disabled

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabledStyles}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button