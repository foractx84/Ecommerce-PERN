import IconButton from "./IconButton";

export default {
  title: "UI/IconButton",
  component: IconButton,
};

const Template = (args) => <IconButton {...args} />;

export const Top = Template.bind({});
Top.args = {
  icon: "top",
  variant: "primary",
  size: "md",
};

export const Left = Template.bind({});
Left.args = {
  icon: "left",
  variant: "primary",
  size: "md",
};

export const Right = Template.bind({});
Right.args = {
  icon: "right",
  variant: "primary",
  size: "md",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  icon: "heart",
  variant: "secondary",
  size: "sm",
};

export const Eye = Template.bind({});
Eye.args = {
  icon: "eye",
  variant: "secondary",
  size: "sm",
};
