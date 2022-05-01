import Languages from './Languages';

export default {
	title: 'components/Languages',
	component: 'Languages',
};

const Template = (args) => <Languages {...args} />;

export const Default = Template.bind({});
Default.args = {};
