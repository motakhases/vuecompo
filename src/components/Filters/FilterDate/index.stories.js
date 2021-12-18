import FilterDate from "./index.vue";

export default {
  component: FilterDate,
  title: "Components/Filters/FilterDate",
};

const Template = (_, { argTypes }) => ({
  components: { FilterDate },
  props: Object.keys(argTypes),
  data() {
    return {
      value: "",
    };
  },
  methods: {
    updateDate(val) {
      this.value = val;
    },
  },
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl">
		<FilterDate v-bind='$props' @date="updateDate"/>

ty  -{{value}}
</div>
  `,
});

export const Default = Template.bind({});

Default.args = {
  name: "some name",
  text: "عنوان فیلتر",
  val: "value",
  disabled: false,
};
