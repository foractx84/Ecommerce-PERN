import Button from "./Button";

export default {
  title: "UI/Button",
  component: Button,
};

export const Text_Primary = {
  args: {
    mode: "text",
    children: "View All Products",
    variant: "primary",
  },
};

export const Text_White = {
  args: {
    mode: "text",
    children: "Add To Cart",
    variant: "white",
  },
};

export const Text_Green = {
  args: {
    mode: "text",
    children: "Buy Now!",
    variant: "green",
  },
};    

export const Icon_Top = {
  args: {
    mode: "icon",
    icon: "top",
    variant: "primary",
    size: "md",
  },
};

export const Icon_Left = {
  args: {
    mode: "icon",
    icon: "left",
    variant: "primary",
    size: "md",
  },
};


export const Icon_Right = {
  args: {
    mode: "icon",
    icon: "right",
    variant: "primary",
    size: "md",
  },
};

export const Icon_Heart = {
  args: {
    mode: "icon",
    icon: "heart",
    variant: "secondary",
    size: "sm",
  },
};

export const Icon_Eye = {
  args: {
    mode: "icon",
    icon: "eye",
    variant: "secondary",
    size: "sm",
  },
};
