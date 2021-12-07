import Radio from "@/components/Radio/index.vue";

import FilterStatus from "./index.vue";

export default {
  component: FilterStatus,
  title: "Components/Filters/FilterStatus",
};

const Template = (_, { argTypes }) => ({
  components: { FilterStatus, Radio },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl">
		<FilterStatus v-bind='$props'>
		<Radio :disabled="disabled" :name="name" :val="val" :text="text" />
		<Radio :disabled="disabled" :name="name" :val="val" :text="text" />

		</FilterStatus>
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
