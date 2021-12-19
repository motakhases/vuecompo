import Filters from "./index.vue";
import FilterActions from "./FilterActions/index.vue";
import Radio from "@/components/Radio/index.vue";
import FilterAccordion from "./FilterAccordion/index.vue";
import FilterDate from "./FilterDate/index.vue";
import FilterAmount from "./FilterAmount/index.vue";
export default {
  component: Filters,
  title: "Components/Filters",
};

const Template = (_, { argTypes }) => ({
  components: {
    Filters,
    FilterActions,
    FilterAccordion,
    Radio,
    FilterDate,
    FilterAmount,
  },
  props: Object.keys(argTypes),
  data() {
    return {
      data: [],
      radioValue: "",
      dateValue: "",
      dateCheck: [],
    };
  },
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl">
		<Filters>
      <FilterActions/>
				<FilterAccordion text="وضعیت" v-bind='$props' v-model="data">
					<Radio :disabled="disabled" v-model="radioValue" :name="name" :val="val" :text="text" />
					<Radio :disabled="disabled" v-model="radioValue" :name="name" :val="val" :text="text" />
				</FilterAccordion>
				<FilterAccordion text="تاریخ" v-bind='$props' v-model="dateCheck">
					<FilterDate v-model="dateValue" />
				</FilterAccordion>
				<FilterAccordion text="مبلغ" v-bind='$props' v-model="dateCheck">
					<FilterAmount v-model="dateValue" />
				</FilterAccordion>
    </Filters>

  </div>
  `,
});

export const Default = Template.bind({});



Default.args = {
  name: "some name",
  val: "value",
  disabled: false,
};
