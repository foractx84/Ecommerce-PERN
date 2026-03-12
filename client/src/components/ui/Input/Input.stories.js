import Input from "./Input";

export default {
  title: "UI/Input",
  component: Input,
};

export const Default = () => <Input />;

export const WithLabel = () => <Input label="Username" />;

export const WithError = () => <Input label="Email" error="Invalid email address" />;