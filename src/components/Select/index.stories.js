import Select from "./index.vue";
import "@/utils/validations";

const Template = (_, { argTypes }) => ({
  components: {
    Select,
  },
  props: Object.keys(argTypes),
  data: () => ({
    data: "",
  }),
  methods: {

  },
  template: `
    <div class="dark:bg-surface-dark grid grid-cols-3 gap-xs p-sm rounded-md h-[300px] rtl">
      <Select v-model="data" v-bind="$props" class="col-span-3" placeholder="متن"/>
      <Select v-model="data" v-bind="$props" class="col-span-3" search />
      <Select v-model="data" loading v-bind="$props" class="col-span-3" label="حالت لودینگ"/>
      <Select v-model="data" disabled v-bind="$props" class="col-span-3" label="حالت غیر فعال" />
      {{data}}
    </div>
  `,
});

const select = Template.bind({});

select.args = {
  disabled: false,
  label: "",
  hint: "",
  successMessage: "عملیات موفقیت آمیز بود",
  options: [
    { id: 1, text: "اولین گزینه", value: "first" },
    { id: 2, text: "دومین گزینه", value: "second", disabled: true },
    { id: 3, text: "سومین گزینه", value: "third" },
    { id: 4, text: "چهارمین گزینه", value: "forth" },
    { id: 5, text: "پنجمین گزینه", value: "fifth" },
  ],
  disabledOptionId: null,
  loading: false,
  rules: "required",
};

export default select;
