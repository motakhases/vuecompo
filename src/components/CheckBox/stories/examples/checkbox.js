import CheckBox from '../../index.vue';

const Template = (_, { argTypes }) => ({
  components: { CheckBox },
  props: Object.keys(argTypes),
  data: () => ({
    data: [
      'سومین گزینه',
    ],
  }),
  template: `
  <div class="dark:bg-surface-dark flex flex-row-reverse p-sm rounded-md">
    <div class="w-full">
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

    <div>
      <pre v-if="data" class="dark:text-secondary"><code>{{data}}</code></pre>
    </div>
  </div>
  `,
});

const checkbox = Template.bind({});

export default checkbox;
