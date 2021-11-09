import Component from './index.vue';

export default {
  component: Component,
  title: 'Components/Toggle',
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md" dir="rtl">
    <Component :disabled="disabled" />
  </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  disabled:false
};
