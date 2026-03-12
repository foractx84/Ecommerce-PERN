import { ArrowUp, ArrowLeft, ArrowRight, Heart, Eye } from "lucide-react";

function Button({ icon, children, mode = "text", variant = "primary", size = "md", type = "button", className = "", ...props }) {
  const baseTextClasses =
    "px-[48px] py-[16px] rounded-[4px] font-['Poppins'] not-italic font-medium text-base leading-[24px] justify-center items-center";

  const baseIconClasses =
    "inline-flex items-center justify-center rounded-full transition";

  const textVariants = {
    primary: "bg-[#DB4444] hover:bg-[#DB4444]/80 text-[#FAFAFA]",
    white: "bg-[#FFFFFF] hover:bg-[#FFFFFF]/80 text-[#000000] border-[1px] border-solid border [border-color:rgba(0,0,0,0.5)]",
    green: "bg-[#00FF66] hover:bg-[#00FF66]/80 text-[#FAFAFA]",
  };

  const iconVariants = {
    primary: "bg-[#F5F5F5] text-black hover:opacity-80",
    secondary: "bg-[#FFFFFF] text-black hover:opacity-80",
  };

  const sizes = {
    sm: "w-[34px] h-[34px]",
    md: "w-[46px] h-[46px]",
  };

  const icons = {
    top: <ArrowUp />,
    left: <ArrowLeft />,
    right: <ArrowRight />,
    heart: <Heart />,
    eye: <Eye />,
  };

  const baseClasses = mode == "text" ? baseTextClasses : baseIconClasses;
  const variantClasses = mode == "text" ? textVariants[variant] : iconVariants[variant] ?? textVariants.primary;
  const sizeClasses = mode == "icon" ? sizes[size] : "";

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim()}
      {...props}
    >
      { mode == "icon" ? icons[icon] : children }
    </button>
  );
}
  
export default Button;