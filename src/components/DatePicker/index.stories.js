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
      singleDate: "",
      rangeDate: [],
      previewDate: "",
      rangeMode: true,
      previewMode: true,
    };
  },
  template: `
  <div class="bg-surface-focus dark:bg-surface-dark-focus p-lg rounded-md flex flex-col gap-md rtl">
    <h1 class="font-bold dark:text-surface"> تقویم </h1>
		<DatePicker v-model="singleDate" />

    <h1 class="mt-sm font-bold dark:text-surface"> تقویم با بازه زمانی </h1>
		<DatePicker v-model="rangeDate" :range="rangeMode" />

    <h1 class="mt-sm font-bold dark:text-surface"> تقویم با حالت پیش نمایش </h1>
		<DatePicker v-model="previewDate" :preview="previewMode" />
  </div>
  `,
});

export const Default = Template.bind({});
