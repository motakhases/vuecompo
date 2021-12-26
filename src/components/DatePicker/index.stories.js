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
  <div class="dark:bg-surface-dark p-sm rounded-md w-[350px]" dir="rtl">
		<DatePicker v-model="single" />
  </div>
  `,
});

export const Default = Template.bind({});
