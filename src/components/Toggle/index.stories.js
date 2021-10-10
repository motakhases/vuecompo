import Toggle from './index.vue';

export default {
  component: Toggle,
  title: 'Components/Toggle',
};

const Template = (_, { argTypes }) => ({
  components: { Toggle },
  props: Object.keys(argTypes),
  template: `
    <Toggle dir="rtl" :disabled="disabled">
    </Toggle>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  disabled:false
};
