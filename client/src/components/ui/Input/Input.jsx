function Input({
  label,
  required = false,
  variant = "filled",
  icon,
  as = "input",
  className = "",
  inputClassName = "",
  ...props
}) {
  const Component = as === "textarea" ? "textarea" : "input";

  const wrapperVariants = {
    filled: "bg-[#F5F5F5] rounded-[4px]",
    outline: "bg-transparent border border-black/50 rounded-[4px]",
    underlined: "bg-transparent border-b border-black/50 rounded-none",
    footer: "bg-transparent border border-[#FAFAFA] rounded-[4px]",
  };

  const fieldVariants = {
    filled:
      "w-full bg-transparent px-4 py-3 font-['Poppins'] text-base text-black placeholder:text-black/40 focus:outline-none",
    outline:
      "w-full bg-transparent px-4 py-3 font-['Poppins'] text-base text-black placeholder:text-black/40 focus:outline-none",
    underlined:
      "w-full bg-transparent px-0 py-2 font-['Poppins'] text-base text-black placeholder:text-black/40 focus:outline-none",
    footer:
      "w-full bg-transparent px-4 py-3 font-['Poppins'] text-base text-[#FAFAFA] placeholder:text-[#FAFAFA]/40 focus:outline-none",
  };

  return (
    <div className={`w-full ${className}`.trim()}>
      {label && (
        <label className="mb-2 block font-['Poppins'] text-base text-black/40">
          {label}
          {required && <span className="text-[#DB4444]">*</span>}
        </label>
      )}

      <div
        className={`flex items-center gap-3 ${wrapperVariants[variant] ?? wrapperVariants.filled}`}
      >
        <Component
          className={`${fieldVariants[variant] ?? fieldVariants.filled} ${inputClassName}`.trim()}
          {...props}
        />
        {icon && <span className="pr-4 flex items-center">{icon}</span>}
      </div>
    </div>
  );
}

export default Input;