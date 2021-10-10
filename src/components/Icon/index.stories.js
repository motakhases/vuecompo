import Icon from './index.vue';

export default {
  component: Icon,
  title: 'Components/Icon',
};

const Template = (_, { argTypes }) => ({
  components: { Icon },
  props: Object.keys(argTypes),
  template: `
    <Icon :name="name" />
  `,
});

export const Default = Template.bind({});

Default.args = {
  name: 'chevronUp'
};
