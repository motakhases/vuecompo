import Component from './index.vue';

export default {
  component: Component,
  title: 'Components/Tag',
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
    <Component :btn="true'></Component>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  button: false,
};
