import Component from './index.vue';

export default {
  component: Component,
  title: 'Components/CheckBox',
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
    <Component :disabled="disabled" :checked="checked">
    {{text}}
    </Component>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  text: 'لیبل',
  disabled: false,
  checked: false,
};
