import Component from './index.vue';

export default {
  component: Component,
  title: 'Components/Button',
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
    <Component :type="type" :size="size" :disabled="disabled">
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
  type: {
    options: ['primary', 'secondary', 'tertiary'],
    control: { type: 'radio' },
  },
};

Default.args = {
  text: 'Button',
  size: 'large',
  type: 'primary',
  disabled: false,
};
