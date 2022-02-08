import Filters from "./index.vue";
import Radio from "@/components/Radio/index.vue";
import FilterAccordion from "./FilterAccordion/index.vue";
import FilterDate from "./FilterDate/index.vue";
import FilterAmount from "./FilterAmount/index.vue";
import Button from "@/components/Button/index.vue";
export default {
  component: Filters,
  title: "Components/Filters",
};

const Template = () => ({
  components: {
    Filters,
    FilterAccordion,
    Radio,
    FilterDate,
    FilterAmount,
    Button,
  },
  data() {
    return {
      statusValue: "",
      dateValue: "",
      priceValue: "",

      status: [],
      date: [],
      price: [],
      modal: false,
    };
  },
  methods: {
    toggleModal() {
      this.modal = !this.modal;
    },
  },
  template: `
  <div class="bg-surface-focus dark:bg-surface-dark-focus p-lg rounded-md flex flex-col gap-md rtl">
  <Button
			type="primary"
			size="medium"
			text="کلیک کن"
			@click.native="toggleModal"
		/>
    {{statusValue}}
    {{dateValue}}
    {{priceValue}}
    {{modal}}
		<Filters :is-open="modal"
    :toggle="toggleModal">
				<FilterAccordion text="وضعیت" v-model="status"   
        name="firstCheckBox"
        val="اولین گزینه"
        >
					<Radio v-model="statusValue" name="r" val="active" text="موفق" />
					<Radio v-model="statusValue" name="r" val="inactive" text="ناموفق" />
				</FilterAccordion>
				<FilterAccordion text="تاریخ" v-model="date" name="secondCheckBox"
        val="دومین گزینه">
					<FilterDate v-model="dateValue" />
				</FilterAccordion>
				<FilterAccordion text="مبلغ" v-model="price" name="thirdCheckBox"
        val="سومین گزینه">
					<FilterAmount v-model="priceValue" />
				</FilterAccordion>
        <template slot='footer'>
        <Button
        type="secondary"
        size="medium"
        text="حذف"
      />
      <Button
        type="primary"
        size="medium"
        text="اعمال"
      />
        </template>
		</Filters>
  </div>
  `,
});

export const Default = Template.bind({});
