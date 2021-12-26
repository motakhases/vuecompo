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

const Template = () => ({
  components: {
    Filters,
    FilterActions,
    FilterAccordion,
    Radio,
    FilterDate,
    FilterAmount,
  },
  data() {
    return {
      statusValue: '',
      statusValue: '',
      priceValue: '',

      status: [],
      date: [],
      price: [],
    };
  },
  template: `
  <div class="bg-surface-focus dark:bg-surface-dark-focus p-lg rounded-md flex flex-col gap-md rtl">
		<Filters>
      <FilterActions/>
				<FilterAccordion text="وضعیت" v-model="status">
					<Radio v-model="statusValue" name="r" val="active" text="موفق" />
					<Radio v-model="statusValue" name="r" val="inactive" text="ناموفق" />
				</FilterAccordion>
				<FilterAccordion text="تاریخ" v-model="date">
					<FilterDate v-model="dateValue" />
				</FilterAccordion>
				<FilterAccordion text="مبلغ" v-model="price">
					<FilterAmount v-model="priceValue" />
				</FilterAccordion>
    </Filters>

  </div>
  `,
});

export const Default = Template.bind({});
