import Radio from '../../index.vue';

const Template = (_, { argTypes }) => ({
  components: { Radio },
  props: Object.keys(argTypes),
  data: () => ({
    data: '',
  }),
  template: `
  <div class="dark:bg-surface-dark flex flex-row-reverse p-sm rounded-md">
    <div class="w-full">
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
    </div>

    <div>
      <pre v-if="data" class="dark:text-secondary"><code>{{data}}</code></pre>
    </div>
  </div>
  `,
});

const radio = Template.bind({});

export default radio;
