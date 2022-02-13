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
      priceFilterType: "PRICE_RANGE",
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

    updateAmountt(i) {
      this.priceFilterType = i;
    },
  },
  template: `
  <div
  class="bg-surface-focus dark:bg-surface-dark-focus p-lg rounded-md flex flex-col gap-md rtl"
>
  <Button
    type="primary"
    size="medium"
    text="کلیک کن"
    @click.native="toggleModal"
  />
  {{priceFilterType}}

  <Filters :is-open="modal" :toggle="toggleModal">
    <FilterAccordion
      v-model="status"
      text="وضعیت"
      name="firstCheckBox"
      val="اولین گزینه"
    >
      <Radio v-model="statusValue" name="r" val="active" text="موفق" />
      <Radio v-model="statusValue" name="r" val="inactive" text="ناموفق" />
    </FilterAccordion>
    <FilterAccordion
      v-model="date"
      text="تاریخ"
      name="secondCheckBox"
      val="دومین گزینه"
    >
      <FilterDate v-model="dateValue" />
    </FilterAccordion>
    <FilterAccordion
      v-model="price"
      text="مبلغ"
      name="thirdCheckBox"
      val="سومین گزینه"
    >
      <FilterAmount
        v-model="priceValue"
        :amount-filter="priceFilterType"
        @updateAmount="updateAmountt"
      />
    </FilterAccordion>
    <template slot="footer">
      <Button type="secondary" size="medium" text="حذف" />
      <Button type="primary" size="medium" text="اعمال" />
    </template>
  </Filters>
</div>
  `,
});

export const Default = Template.bind({});
