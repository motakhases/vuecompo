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
  data() {
    return {
      me: "valuere",
      startInput: "",
      endInput: "",
    };
  },
  methods: {
    handle(val) {
      this.me = val;
    },
  },
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl">
		<DatePicker :value="me" @val="handle" >

    </DatePicker>
		<TextField v-model="me" />
{{me}}
  </div>
  `,
});

export const Default = Template.bind({});

Default.args = {
  range: false,
  label: "label",
};
