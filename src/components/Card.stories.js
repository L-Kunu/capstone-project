import Card from "./Card.js";

export default {
  title: "components/Card",
  component: Card,
  argTypes: {},
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = { specialty };
