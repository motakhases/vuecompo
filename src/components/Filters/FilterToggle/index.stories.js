import FilterToggle from "./index.vue";

export default {
  component: FilterToggle,
  title: "Components/Filters/FilterToggle",
};

const Template = (_, { argTypes }) => ({
  components: { FilterToggle },
  props: Object.keys(argTypes),
  data() {
    return {
      data: [],
    };
  },
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl">
		<FilterToggle v-bind='$props' v-model="data"/>
		{{data}}
		{{val}}
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
