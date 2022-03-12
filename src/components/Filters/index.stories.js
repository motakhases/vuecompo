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
      dateValue: '',
      priceValue: '',

      status: [],
      date: [],
      price: [],
      modal: false,
      filters:{
        status:''
      }
    };
  },
  methods: {
    toggleModal() {
      this.modal = !this.modal;
    },

    updateAmountt(i) {
      this.priceFilterType = i;
    },
    filter(){
this.$router.push({})
    }
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
  <Filters
  :is-open="modal"
  :toggle="toggleModal"
  :filter="filter"
  :clear-query="clearQuery"
>
  <FilterAccordion
    v-model="activeAccordion"
    text="وضعیت"
    name="secondCheckBox"
    val="status"
  >
    <Radio
      v-model="filters.status"
      name="r"
      val="active"
      text="موفق"
    />
    <Radio
      v-model="filters.status"
      name="r"
      val="inactive"
      text="ناموفق"
    />
  </FilterAccordion>
  <FilterAccordion
    v-model="activeAccordion"
    text="تاریخ"
    name="secondCheckBox"
    val="date"
  >
    <FilterDate
      @updateFilter="updateFilter"
      @deleteFilter="deleteFilter"
    />
  </FilterAccordion>
  <FilterAccordion
    v-model="activeAccordion"
    text="مبلغ"
    name="thirdCheckBox"
    val="amount"
  >
    <FilterAmount
      @updateFilter="updateFilter"
      @deleteFilter="deleteFilter"
    />
  </FilterAccordion>
</Filters>
</div>
  `,
});

export const Default = Template.bind({});
