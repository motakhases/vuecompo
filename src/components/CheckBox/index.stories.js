import CheckBox from './index.vue';

const Template = (_, { argTypes }) => ({
  components: { CheckBox },
  props: Object.keys(argTypes),
  data: () => ({
    data: [
      'سومین گزینه',
    ],
  }),
  template: `
  <div class="dark:bg-surface-dark grid gap-y-md p-sm rounded-md">
      <CheckBox
        v-model="data"
        name="firstCheckBox"
        val="اولین گزینه"
        text="اولین گزینه"
      />
      <CheckBox
        v-model="data"
        name="firstCheckBox"
        val="دومین گزینه"
        text="دومین گزینه"
      />
      <CheckBox
        disabled
        v-model="data"
        name="firstCheckBox"
        val="سومین گزینه"
        text="سومین گزینه"
      />
      <CheckBox
        disabled
        v-model="data"
        name="firstCheckBox"
        val="چهارمین گزینه"
        text="چهارمین گزینه"
      />
      <CheckBox
        v-model="data"
        name="firstCheckBox"
        val="پنجمین گزینه"
        text="پنجمین گزینه"
      />
  </div>
  `,
});

const checkbox = Template.bind({});

export default checkbox;
