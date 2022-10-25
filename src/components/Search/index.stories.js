import Search from "./index.vue";
import "@/utils/validations";
export default {
  component: Search,
  title: "Components/Search",
};

const Template = (_, { argTypes }) => ({
  components: {
    Search,
  },
  props: Object.keys(argTypes),
  data: () => ({
    data: "",
  }),
  methods: {},
  template: `
    <div class="dark:bg-surface-dark grid grid-cols-3 gap-xs p-sm rounded-md h-[300px] rtl">
      <Search v-model="data" v-bind="$props" class="col-span-3" placeholder="متن"/>
    </div>
  `,
});
export const Default = Template.bind({});

Default.args = {
  disabled: false,
  label: "",
  hint: "",
  successMessage: "عملیات موفقیت آمیز بود",
  options: [
    {
      id: 3,
      title: "شماره کارت:",
      text: "شماره کارت شانزده رقمی",
      value: "card",
    },
    {
      id: 4,
      title: "شناسه پرداخت:",
      text: "1255",
      value: "pay",
      isUnique: true
    },
    {
      id: 8,
      title: "ایمیل:",
      text: "email@example.com",
      value: "email",
    },
  ],
  disabledOptionId: null,
  loading: false,
  rules: "required",
};
