import Radio from "@/components/Radio/index.vue";

import FilterَAmount from "./index.vue";

export default {
  component: FilterَAmount,
  title: "Components/Filters/FilterَAmount",
};

const Template = (_, { argTypes }) => ({
  components: { FilterَAmount, Radio },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl">
		<FilterَAmount v-bind='$props'>

		</FilterَAmount>
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
