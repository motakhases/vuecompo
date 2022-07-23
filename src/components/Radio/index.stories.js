import Radio from './index.vue';

const Template = (_, { argTypes }) => ({
  components: { Radio },
  props: Object.keys(argTypes),
  data: () => ({
    data: '',
  }),
  template: `
  <div class="dark:bg-surface-dark grid gap-y-md p-md rounded-md rtl">
      <Radio
        v-model="data"
        name="radio"
        val="اولین گزینه"
        text="اولین گزینه"
      />
      <Radio
        v-model="data"
        name="radio"
        val="دومین گزینه"
        text="دومین گزینه"
      />
      <Radio
        v-model="data"
        disabled
        name="radio"
        val="سومین گزینه"
        text="سومین گزینه"
      />
      <Radio
        v-model="data"
        disabled
        name="radio"
        val="سومین گزینه"
        text="سومین گزینه"
        loading
      />
  </div>
  `,
});

const radio = Template.bind({});

export default radio;
