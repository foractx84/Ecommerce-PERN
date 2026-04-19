import { ArrowUp, ArrowLeft, ArrowRight, Heart, Eye, Trash2, ShoppingCart, User } from "lucide-react";

function Button({ icon, children, mode = "text", onlyText = false, variant = "primary", size = "md", type = "button", className = "", ...props }) {
  const baseTextClasses =
    "px-[48px] py-[16px] rounded-[4px] font-['Poppins'] not-italic font-medium text-base leading-[24px] justify-center items-center";

  const baseIconClasses =
    "inline-flex items-center justify-center rounded-full transition";

  const textVariants = {
    primary: "bg-[#DB4444] hover:bg-[#C23030] text-[#FAFAFA]",
    white: "bg-[#FFFFFF] hover:bg-[#F0F0F0] text-[#000000] border-[1px] border-solid border [border-color:rgba(0,0,0,0.5)]",
    green: "bg-[#00FF66] hover:bg-[#00DD55] text-[#FAFAFA]",
  };

  const iconVariants = {
    primary: "bg-[#F5F5F5] text-black hover:bg-[#E0E0E0] hover:scale-110 active:scale-95",
    secondary: "bg-[#FFFFFF] text-black hover:bg-[#F0F0F0] hover:scale-110 active:scale-95",
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
    trash: <Trash2 />,
    cart: <ShoppingCart />,
    user: <User />,
  };

  const baseClasses = mode == "text" ? onlyText ? "font-['Poppins'] not-italic font-medium text-base leading-[24px] justify-center items-center" : baseTextClasses : baseIconClasses;
  const variantClasses = mode == "text" ? onlyText ? 'text-[#FAFAFA]' : textVariants[variant] : iconVariants[variant] ?? textVariants.primary;
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