function Button({ children, variant = "primary", type = "button", className = "", ...props }) {
  const baseClasses =
    "px-[48px] py-[16px] rounded-[4px] font-['Poppins'] not-italic font-medium text-base leading-[24px] justify-center items-center";

  const variants = {
    primary: "bg-[#DB4444] hover:bg-[#DB4444]/80 text-[#FAFAFA]",
    white: "bg-[#FFFFFF] hover:bg-[#FFFFFF]/80 text-[#000000] border-[1px] border-solid border [border-color:rgba(0,0,0,0.5)]",
    green: "bg-[#00FF66] hover:bg-[#00FF66]/80 text-[#FAFAFA]",
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant] ?? variants.primary} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
  
export default Button;