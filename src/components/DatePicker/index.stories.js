import DatePicker from './index.vue';
import moment from 'moment-jalaali';

export default {
  component: DatePicker,
  title: 'Components/DatePicker',
};

const Template = (_, { argTypes }) => ({
  components: { DatePicker },
  props: Object.keys(argTypes),
  data() {
    return {
      singleDate: moment().subtract(1, 'days').format('jYYYY-jMM-jDD'),
      rangeDate: [],
      previewDate: '',
      drpdata: '',
      rangeMode: true,
      previewMode: true,
    };
  },
  template: `
  <div class="bg-surface-focus dark:bg-surface-dark-focus p-lg rounded-md rtl">
    <div class="w-[296px] flex flex-col gap-md">
      <h1 class="font-bold dark:text-surface"> تقویم </h1>
		  <DatePicker v-model="singleDate" button />

      <h1 class="mt-sm font-bold dark:text-surface"> تقویم به صورت dropdown </h1>
		  <DatePicker v-model="drpdata" dropdown />
{{drpdata}}drpdata
      <h1 class="mt-sm font-bold dark:text-surface"> تقویم با بازه زمانی </h1>
		  <DatePicker v-model="rangeDate" :range="rangeMode" />

      <h1 class="mt-sm font-bold dark:text-surface"> تقویم با حالت پیش نمایش تاریخ </h1>
		  <DatePicker v-model="previewDate" :preview="previewMode" />

    </div>
  </div>
  `,
});

export const Default = Template.bind({});
