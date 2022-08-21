import Toggle from './index.vue';

const Template = (_, { argTypes }) => ({
  components: { Toggle },
  props: Object.keys(argTypes),
  data: () => ({
    value: true
  }),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md" dir="rtl">
    <Toggle v-model="value" />
    <Toggle />
    <Toggle disabled />
    <Toggle loading />

  </div>
  `,
});

const toggle = Template.bind({});

export default toggle
