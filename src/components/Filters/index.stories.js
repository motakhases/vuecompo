import Filters from "./index.vue";
import FilterActions from "./FilterActions/index.vue";
import Radio from "@/components/Radio/index.vue";
import FilterAccordion from "./FilterAccordion/index.vue";
import FilterDate from "./FilterDate/index.vue";

export default {
  component: Filters,
  title: "Components/Filters",
};

const Template = (_, { argTypes }) => ({
  components: { Filters, FilterActions, FilterAccordion, Radio, FilterDate },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl">
		<Filters>
      <FilterActions/>
				<FilterAccordion  v-bind='$props'>
					<Radio :disabled="disabled" :name="name" :val="val" :text="text" />
					<Radio :disabled="disabled" :name="name" :val="val" :text="text" />

				</FilterAccordion>
				<FilterAccordion text="تاریخ">
					<FilterDate/>

				</FilterAccordion>
    </Filters>
  </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  size: {
    options: ["small", "medium", "large"],
    control: { type: "radio" },
  },
  type: {
    options: ["primary", "secondary", "tertiary"],
    control: { type: "radio" },
  },
};

Default.args = {
  name: "some name",
  text: "عنوان فیلتر",
  val: "value",
  disabled: false,
};
