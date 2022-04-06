import SearchPage from "./SearchPage";

export default {
  title: "components/SearchPage",
  component: SearchPage,
  argTypes: {
    onsubmit: "onSubmit",
  },
};

const Template = (args) => <SearchPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
