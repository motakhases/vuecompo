import Radio from "@/components/Radio/index.vue";

import FilterAccordion from "./index.vue";

export default {
  component: FilterAccordion,
  title: "Components/Filters/FilterAccordion",
};

const Template = (_, { argTypes }) => ({
  components: { FilterAccordion, Radio },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl">
		<FilterAccordion v-bind='$props'>
		<Radio :disabled="disabled" :name="name" :val="val" :text="text" />
		<Radio :disabled="disabled" :name="name" :val="val" :text="text" />

		</FilterAccordion>
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
