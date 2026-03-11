import { ArrowUp, ArrowLeft, ArrowRight, Heart, Eye } from "lucide-react";

function IconButton({
  icon,
  variant = "primary",
  size = "md",
  className = "",
  ariaLabel,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full transition";

  const variants = {
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

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`.trim()}
      {...props}
    >
      {icons[icon]}
    </button>
  );
}

export default IconButton;
