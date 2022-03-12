import Filters from "./index.vue";
import FilterActions from "./FilterActions/index.vue";
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
    FilterActions,
    FilterAccordion,
    Radio,
    FilterDate,
    FilterAmount,
    Button,
  },
  data() {
    return {
      filters: {
        status: "",
      },
      activeAccordion: [],
      modal: false,
    };
  },
  created() {
    // update filter list based on query
    this.fillStatus();
  },
  methods: {
    // add property to filter in components
    updateFilter(i) {
      this.filters = { ...this.filters, ...i };
    },
    // delete property from filter in components
    deleteFilter(i) {
      delete this.filters[i];
    },
    filter() {
      const filterList = {};
      Object.keys(this.filters).forEach((item) => {
        // if property of filter has value
        if (this.filters[item]?.length) {
          // if property exist in active accordion
          if (this.activeAccordion.length) {
            this.activeAccordion.forEach((element) => {
              // to check if it includes the item for min_amount, max_Amount, range_amount
              if (item.includes(element)) {
                filterList[item] = this.filters[item];
              }
            });
          } else {
            // if there is no active accordion so empty filters
            this.filters = { status: "", date: "" };
          }
        }
      });
      // push filters list to query
      this.$router.push({ query: filterList });

      // close modal
      this.toggleModal();
    },

    toggleModal() {
      this.modal = !this.modal;
    },
    fillStatus() {
      this.activeAccordion = Object.keys(this.$route.query);
      this.filters = { ...this.filters, ...this.$route.query };
    },
    clearQuery() {
      // clear filter list and query and close the modal
      this.modal = false;
      this.filters = {
        status: "",
      };
      this.$router.replace({ query: {} });
    },
  },
  template: `
  <div
  class="bg-surface-focus dark:bg-surface-dark-focus p-lg rounded-md flex flex-col gap-md rtl"
>
  <Button
    text="فیلتر"
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
