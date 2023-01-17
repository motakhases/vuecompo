import Filters from './index.vue';
import Radio from '@/components/Radio/index.vue';
import FilterAccordion from './FilterAccordion/index.vue';
import FilterDate from './FilterDate/index.vue';
import FilterAmount from './FilterAmount/index.vue';
import Button from '@/components/Button/index.vue';

import { storiesOf } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';

storiesOf('Components/Filters', module)
  .addDecorator(StoryRouter())
  .add('default', () => ({
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
        filters: {
          status: '',
        },
        activeAccordion: [],
        modal: false,
      };
    },

    created() {
      this.fillStatus();
    },

    methods: {
      /**
       * add property to filter in components
       * ------------------------------------------
       */
      updateFilter(i) {
        this.filters = { ...this.filters, ...i };
      },

      /**
       * delete property from filter in components
       * ------------------------------------------
       */
      deleteFilter(i) {
        delete this.filters[i];
      },

      /**
       * filter
       * ------------------------------------------
       */
      filter() {
        console.log('Try to add queries...');
        const filterList = {};

        Object.keys(this.filters).forEach((item) => {
          /**
           * if property of filter has value
           */
          if (this.filters[item]?.length) {
            /**
             * if property exist in active accordion
             */
            if (this.activeAccordion.length) {
              this.activeAccordion.forEach((element) => {
                /**
                 * to check if it includes the item for
                 * min_amount, max_Amount, range_amount
                 */
                if (item.includes(element)) {
                  filterList[item] = this.filters[item];
                }
              });
            } else {
              /**
               * if there is no active accordion so empty filters
               */
              this.filters = { status: '', date: '' };
            }
          }
        });

        console.log({
          filterList,
          queries: this.$route.query,
        });

        /**
         * push filters list to query
         */
        this.$router.push({ query: filterList });

        console.log({
          queries: this.$route.query,
        });

        this.toggleModal();
      },

      /**
       * toggle modal
       * ------------------------------------------
       */
      toggleModal() {
        this.modal = !this.modal;
      },

      /**
       * status
       * ------------------------------------------
       */
      fillStatus() {
        console.log(this.$route);
        this.activeAccordion = Object.keys(this.$route.query);
        this.filters = { ...this.filters, ...this.$route.query };
      },

      /**
       * clear
       * ------------------------------------------
       */
      clearQuery() {
        // clear filter list and query and close the modal
        this.modal = false;
        this.filters = {
          status: '',
        };
        this.$router.replace({ query: {} });
      },
    },

    template: `
    <div class="bg-surface-focus dark:bg-surface-dark-focus p-lg rounded-md flex flex-col gap-md rtl">
      <Button
        text="فیلتر"
        @click.native="toggleModal"
      />

      <pre dir="ltr">{{filters}}</pre>


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
          value=""
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
          value=""
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
          value=""
        >
          <FilterAmount
            @updateFilter="updateFilter"
            @deleteFilter="deleteFilter"
          />
        </FilterAccordion>
      </Filters>
    </div>
    `,
  }));
