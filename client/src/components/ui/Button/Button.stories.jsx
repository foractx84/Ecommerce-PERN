import Button from "./Button";

export default {
  title: "UI/Button",
  component: Button,
};

export const Primary = {
  args: {
    children: "View All Products",
    variant: "primary",
  },
};

export const White = {
  args: {
    children: "Add To Cart",
    variant: "white",
  },
};

export const Green = {
  args: {
    children: "Buy Now!",
    variant: "green",
  },
};    