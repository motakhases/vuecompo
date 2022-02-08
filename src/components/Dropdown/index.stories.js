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
      <Dropdown v-model="data" v-bind="$props" class="col-span-3" />
      <Dropdown loading class="col-span-3" label="حالت لودینگ"/>
      <Dropdown disabled class="col-span-3" label="حالت غیر فعال" />
      {{data}}
    </div>
  `,
});

const dropdown = Template.bind({});

dropdown.args = {
  disabled: false,
  label: 'یک دراپ‌داون عادی',
  hint: 'یک توضیح کوتاه',
  successMessage: 'عملیات موفقیت آمیز بود',
  options: [
    { id: 1, text: 'اولین گزینه', value: 'a', },
    { id: 2, text: 'دومین گزینه', value: 'b', disabled: true },
    { id: 3, text: 'سومین گزینه', value: 'c', },
    { id: 4, text: 'چهارمین گزینه', value: 'd', },
    { id: 5, text: 'پنجمین گزینه', value: 'e', },
  ],
  disabledOptionId: null,
  loading: false,
  rules: 'required',
};

export default dropdown;

