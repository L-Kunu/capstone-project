import Card from "./Card.js";

export default {
  title: "components/Card",
  component: Card,
  argTypes: {},
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  lawyer: {
    id: "",
    name: "Kadir Katran",
    specialty: ["Immigration law"],
    language: ["Turkish"],
    location: "Hamburg",
    contact: {
      address: "Kroonhorst 9D, 22549 Hamburg",
      telephone: "+49 40 244 333 14",
      email: " ra@kadirkatran.de",
      website: " www.kadirkatran.de",
      businessHours: ["Mon - Fri: 9am - 5pm", "Sat - Sun: Closed"],
    },
  },
};
