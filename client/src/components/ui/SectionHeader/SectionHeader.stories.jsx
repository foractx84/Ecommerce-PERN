import SectionHeader from "./SectionHeader";

export default {
  title: "UI/SectionHeader",
  component: SectionHeader,
};

export const Default = {
  args: {
    eyebrow: "Eyebrow Text",
    title: "Section Title",
    arrows: true,
  },
};

export const Button = {
  args: {
    eyebrow: "Eyebrow Text",
    title: "Section Title",
    button: true,
  },
};