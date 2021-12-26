import Radio from "@/components/Radio/index.vue";
import FilterAccordion from "./index.vue";

// export default {
//   component: FilterAccordion,
//   title: "Components/Filters/FilterAccordion",
// };

const Template = (_, { argTypes }) => ({
  components: { FilterAccordion, Radio },
  props: Object.keys(argTypes),
	data() {
    return {
      data: [],
			radioValue: 'val1'
    };
  },
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl">
		<FilterAccordion v-bind='$props' v-model="data">
			<Radio :disabled="disabled"  v-model="radioValue" :name="name" val="val1" :text="text" />
			<Radio :disabled="disabled"  v-model="radioValue" :name="name" val="val2" :text="text" />
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
