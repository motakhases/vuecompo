// import Vue from "vue";

// import VuePersianDatetimePicker from "vue-persian-datetime-picker";
// Vue.component("date-picker", VuePersianDatetimePicker);
import DatePicker from "./index.vue";

export default {
  component: DatePicker,
  title: "Components/DatePicker",
};

const Template = (_, { argTypes }) => ({
  components: { DatePicker },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md">
		<DatePicker v-bind="$props">
      {{ text }}
    </DatePicker>
  </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  mode: {
    options: ["simple", "range"],
    control: { type: "radio" },
  },
};

Default.args = {
  range: false,
};
