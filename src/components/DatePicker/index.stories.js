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
    };
  },
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl">
		<DatePicker  v-model="single" v-bind="$props"
		>
    </DatePicker>
		{{single}}
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
