/* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable
no-console */
<template>
  <div
    dir="rtl"
    class="bg-background"
  >
    <div class="flex">
      <div class="w-full">
        <div class="container">
          status {{ status }}
          <button @click="toggleModal">
            open
          </button>
          <Filters
            :is-open="modal"
            :toggle="toggleModal"
            :filter="filter"
            :clear-query="clearQuery"
          >
            <FilterAccordion
              v-model="status"
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
              v-model="status"
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
              v-model="status"
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
          {{ filters }} filters.amount
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

export default Vue.extend({
  name: 'App',
  components: {
    Filters,
    Radio,
    FilterAccordion,
    FilterDate,
    FilterAmount,
  },
  data() {
    return {
      toggleMenu: false,
      filters: {
        status: '',
        date: '',
        amount: '۱۱۱۴۵',
        amountType: 'amount',
      },
      range: '',
      status: [],
      date: [],
      modal: false,
    };
  },
  computed: {
    amountType() {
      return this.filters.amountType;
    },
  },
  watch: {
    amountType() {
      if (!this.status.includes(this.amountType)) {
        this.status = [...this.status, this.amountType];
      }
    },

  },
  mounted() {
    this.fillStatus();
  },
  methods: {
    updateAmount(i) {
      this.filters.amountType = i;
    },
    filter() {
      this.toggleModal();
      const res = {};
      Object.keys(this.filters).forEach((item) => {
        if (item === 'amountType') {
          if (this.status.includes(this.filters[item])) {
            res[this.filters.amountType] = this.filters.amount;
          }
        } else if (this.status.includes(item) && item !== 'amount') {
          res[item] = this.filters[item];
          // if (item === 'amount') {
          //   res[this.filters.amountType] = this.filters[item];
          // } else {
          //   res[item] = this.filters[item];
          // }
        }
        // console.log(this.status.includes(item) || this.status.includes(this.filters.amountType));
        // if (this.status.includes(item) || this.status.includes(item.amountType)) {
        //   console.log('yes');
        //   if (item === 'amount') {
        //     res[this.filters.amountType] = this.filters[item];
        //   } else {
        //     res[item] = this.filters[item];
        //   }
        // }
      });
      this.$router.push({ path: this.$route.path, query: res });
    },

    toggleModal() {
      this.modal = !this.modal;
    },
    fillStatus() {
      const { query } = this.$route;
      const amountList = ['min_amount', 'range_amount', 'max_amount'];
      const queryKeys = Object.keys(query);
      this.status = queryKeys;
      queryKeys.forEach((el) => {
        if (amountList.includes(el)) {
          this.filters.amount = query[el];
          this.filters.amountType = el;
        } else {
          this.filters = Object.assign(this.filters, query);
        }
      });
    },
    clearQuery() {
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
