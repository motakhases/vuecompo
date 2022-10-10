import TextBox from './index.vue';

const Template = (_, { argTypes }) => ({
  components: {
    TextBox,
  },
  props: Object.keys(argTypes),
  data: () => ({
    sm: 'سلام از طرف یک فیلد غیر فعال',
    md: '',
    lg: '',
  }),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md flex flex-col gap-sm rtl">
    <TextBox v-model="sm" size="small" label="سایز کوچک" disabled />
    <TextBox v-model="sm" size="small" label="سایز کوچک" loading />

    <TextBox v-model="md" size="medium" label="سایز متوسط" :maxlength="151515" />
    <TextBox v-model="lg" size="large" label="سایز بزرگ" />
  </div>
  `,
});

const textbox = Template.bind({});

export default textbox;
