import Component from './index.vue';

export default {
  component: Component,
  title: 'Components/CheckBox',
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
    <Component dir="rtl" v-for="(option,index) in options" :key="index" :options="option">
    </Component>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  options: [
    { label: 'لیبل', value: true },
  ],
};
