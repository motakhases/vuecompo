import Component from './index.vue';

export default {
  component: Component,
  title: 'Components/Tag',
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md" dir="rtl">
    <Component :btn="button">
      {{ text }}
    </Component>
  </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  text: 'عنوان تگ',
  button: false,
};
