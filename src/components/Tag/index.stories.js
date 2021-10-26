import Tag from './index.vue';

export default {
  component: Tag,
  title: 'Components/Tag',
};

const Template = (_, { argTypes }) => ({
  components: { Tag },
  props: Object.keys(argTypes),
  template: `
    <Tag dir="rtl" :btn="button">
    {{text}}
    </Tag>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  text: 'لیبل',
  button: false,
};
