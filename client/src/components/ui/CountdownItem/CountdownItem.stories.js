import CountdownItem from "./CountdownItem";

export default {
  title: "UI/CountdownItem",
  component: CountdownItem,
};

export const Default = {
  args: {
    days: "03",
    hours: "12",
    minutes: "45",
    seconds: "30",
  },
};

export const Circle = {
  args: {
    days: "03",
    hours: "12",
    minutes: "45",
    seconds: "30",
    variant: "circle",
  },
};