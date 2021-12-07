import FilterToggle from "./index.vue";

export default {
  component: FilterToggle,
  title: "Components/Filters/FilterToggle",
};

const Template = (_, { argTypes }) => ({
  components: { FilterToggle },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl">
		<FilterToggle v-bind='$props'/>
  </div>
  `,
});

export const Default = Template.bind({});

Default.args = {
	name: 'some name',
  text: 'عنوان فیلتر',
  val: 'value',
  disabled: false
};
