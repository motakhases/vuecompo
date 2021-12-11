// import Vue from "vue";
import TextField from "@/components/TextField/index.vue";

// import VuePersianDatetimePicker from "vue-persian-datetime-picker";
// Vue.component("date-picker", VuePersianDatetimePicker);
import DatePicker from "./index.vue";

export default {
  component: DatePicker,
  title: "Components/DatePicker",
};

const Template = (_, { argTypes }) => ({
  components: { DatePicker, TextField },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl">
		<DatePicker v-bind="$props"
		@singleInput="singleInput = $event"
		@startInput="startInput = $event"
		@endInput="endInput = $event"
		>

    </DatePicker>
		{{startInput}}
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
Default.args = {
  range: false,
  label: "label",
  singleInput: "1399/10/10",
  startInput: "1399/10/10",
  endInput: "",
  id: "",
  fromInput: "",
  toInput: "",
};
