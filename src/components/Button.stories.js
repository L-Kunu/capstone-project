import Button from "./Button.js";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    onClick: "onClick",
  },
};

const Template = (args) => <Button {...args}> Text </Button>;

export const Default = Template.bind({});
Default.args = {};
