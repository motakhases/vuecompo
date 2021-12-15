import Dropdown from './index.vue';
import '@/utils/validations';

const Template = (_, { argTypes }) => ({
  components: {
    Dropdown,
  },
  props: Object.keys(argTypes),
  data: () => ({
    data: '',
  }),
  template: `
    <div class="dark:bg-surface-dark grid grid-cols-3 gap-xs p-sm rounded-md h-[300px]">
      <Dropdown v-model="data" v-bind="$props" class="col-span-1" />
      <Dropdown disabled class="col-span-1" label="حالت غیر فعال" />
      <Dropdown loading class="col-span-1" label="حالت لودینگ"/>
    </div>
  `,
});

const dropdown = Template.bind({});

dropdown.args = {
  disabled: false,
  label: 'یک دراپ‌داون عادی',
  helperHint: 'یک توضیح کوتاه',
  successHint: 'عملیات موفقیت آمیز بود',
  options: [
    { id: 1, name: 'اولین گزینه' },
    { id: 2, name: 'دومین گزینه' },
    { id: 3, name: 'سومین گزینه' },
    { id: 4, name: 'چهارمین گزینه' },
    { id: 5, name: 'پنجمین گزینه' },
  ],
  disabledOptionId: null,
  loading: false,
  rules: 'required',
};

export default dropdown;

