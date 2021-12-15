import DatePicker from "./index.vue";

export default {
  component: DatePicker,
  title: "Components/DatePicker",
};

const Template = (_, { argTypes }) => ({
  components: { DatePicker },
  props: Object.keys(argTypes),
  data() {
    return {
      single: "",
      start: "",
      end: "",
    };
  },
  methods: {
    singleHandler(val) {
      this.single = val;
    },
    startHandler(val) {
      this.start = val;
    },
    endHandler(val) {
      this.end = val;
    },
  },
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl">
		<DatePicker 
		:singleInput="single" @singleValueHandler="singleHandler"
		:startInput="start" @startValueHandler="startHandler"
		:endInput="end" @endValueHandler="endHandler"
		v-bind="$props"
		>
    </DatePicker>
  </div>
  `,
});

export const Default = Template.bind({});

Default.args = {
  range: false,
  label: "label",
  disableSingle: false,
  disableStart: false,
  disableEnd: false,
};
