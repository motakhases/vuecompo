/* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable
no-console */
<template>
  <div
    dir="rtl"
    class="bg-background p-xl"
  >
    <div class="flex">
      <div class="w-full">
        <div class="container">
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
                v-model="filters.date"
                :date="range"
              />
            </FilterAccordion>
            <FilterAccordion
              v-model="activeAccordion"
              text="مبلغ"
              name="thirdCheckBox"
              :val="filters.amountType"
            >
              <FilterAmount
                v-model="filters.amount"
                :type="filters.amountType"
                @updateAmount="updateAmount"
              />
            </FilterAccordion>
          </Filters>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
// Components
import Filters from '@/components/Filters/index.vue';
import Radio from '@/components/Radio/index.vue';
import FilterAccordion from '@/components/Filters/FilterAccordion/index.vue';
import FilterDate from '@/components/Filters/FilterDate/index.vue';
import FilterAmount from '@/components/Filters/FilterAmount/index.vue';
import Button from '@/components/Button/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Filters,
    Radio,
    FilterAccordion,
    FilterDate,
    FilterAmount,
    Button,
  },
  data() {
    return {
      filters: {
        status: '',
        date: '',
        amount: '',
        amountType: 'amount',
      },
      range: '',
      activeAccordion: [],
      modal: false,
    };
  },
  computed: {
    // to put amountType property in separated function to check its changes
    amountType() {
      return this.filters.amountType;
    },
  },
  watch: {
    amountType() {
      // if amountType is changed add it to active accordion
      if (!this.activeAccordion.includes(this.amountType)) {
        this.activeAccordion = [...this.activeAccordion, this.amountType];
      }
    },

  },
  mounted() {
    // update filter list based on query
    this.fillStatus();
  },
  methods: {
    updateAmount(i) {
      // update amountType
      this.filters.amountType = i;
    },
    filter() {
      const filterList = {};
      Object.keys(this.filters).forEach((item) => {
        if (item === 'amountType') {
          // combine amountType and amount for query list, amountType : amount, e.g. min_amount : 10
          if (this.activeAccordion.includes(this.filters[item])) {
            filterList[this.filters.amountType] = this.filters.amount;
          }
        } else if (this.activeAccordion.includes(item) && item !== 'amount') {
          // otherwise add items of filters to query list
          filterList[item] = this.filters[item];
        }
      });
      // push filters list to query
      this.$router.push({ path: this.$route.path, query: filterList });
      // close modal
      this.toggleModal();
    },

    toggleModal() {
      this.modal = !this.modal;
    },
    fillStatus() {
      const { query } = this.$route;
      const amountList = ['min_amount', 'range_amount', 'max_amount'];
      const queryKeys = Object.keys(query);
      this.activeAccordion = queryKeys;
      queryKeys.forEach((el) => {
        // if element is one of these items so update amount and amount type
        // e.g. min_amount: 12 => amountType: min_amount, amount: 12
        if (amountList.includes(el)) {
          this.filters.amount = query[el];
          this.filters.amountType = el;
        } else {
          // otherwise update filter list based on query
          this.filters = Object.assign(this.filters, query);
        }
      });
    },
    clearQuery() {
      // clear filter list and query and close the modal
      this.modal = false;
      this.filters = {
        status: '',
        date: '',
        amount: '',
        amountType: '',
      };
      this.$router.replace({ query: {} });
    },
  },
});
</script>
