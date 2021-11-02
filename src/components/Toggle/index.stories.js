import Toggle from './index.vue';

export default {
  component: Toggle,
  title: 'Components/Toggle',
};

const Template = (_, { argTypes }) => ({
  components: { Toggle },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md" dir="rtl">
    <Toggle :disabled="disabled" />
  </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  disabled:false
};
