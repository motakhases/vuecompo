import Component from './index.vue';

export default {
  component: Component,
  title: 'SomeRoot/Button',
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
    <Component :size="size" :disabled="disabled">
      {{ text }}
    </Component>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  size: {
    options: ['small', 'medium', 'large'],
    control: { type: 'radio' },
  },
};

Default.args = {
  text: 'Button',
  size: 'large',
  disabled: false,
};
