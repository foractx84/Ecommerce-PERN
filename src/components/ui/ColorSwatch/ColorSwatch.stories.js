import ColorSwatch from "./ColorSwatch";

export default {
  title: "UI/ColorSwatch",
  component: ColorSwatch,
};

export const Default = {
  args: {
    color: "#FF0000",
  },
};

export const Selected = {
  args: {
    color: "#00FF00",
    selected: true,
  },
};
