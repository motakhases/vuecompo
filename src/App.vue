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
              val="amount"
            >
              <FilterAmount
                v-model="filters.range_amount"
                @updateFilter="updateFilter"
                @deleteFilter="deleteFilter"
              />
            </FilterAccordion>
          </Filters>
          <code>
            <pre>
                        {{ filters }}

            </pre>
          </code>
          activeAccordion{{ activeAccordion }}
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
        range_amount: [],
      },
      range: '',
      activeAccordion: [],
      modal: false,
      date: '',
      status: '',
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
              if (item.includes(element)) {
                filterList[item] = this.filters[item];
              }
            });
          } else {
            this.filters = { status: '', date: '' };
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
        status: '',
        date: '',
      };
      this.$router.replace({ query: {} });
    },
  },
});
</script>
