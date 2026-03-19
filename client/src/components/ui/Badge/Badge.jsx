function Badge({ children, variant = "discount", className = "", ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center px-3 py-1 rounded-sm text-xs font-normal leading-[18px] font-['Poppins']";

  const variants = {
    discount: "bg-[#DB4444] text-[#FAFAFA]",
    success: "bg-[#00FF66] text-[#FAFAFA]",
  };

  return (
    <span
      className={`${baseClasses} ${variants[variant] ?? variants.discount} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;