import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import Button from '@/components/Button/index.vue';
import Dropdown from '@/components/Dropdown/index.vue';
import moment from 'moment-jalaali';
import FilterDate from './FilterDate/index.vue';
import FilterAmount from './FilterAmount/index.vue';

@Component({
  components: {
    Icon,
    Button,
    FilterDate,
    FilterAmount,
    Dropdown,
  },
})
export default class Logic extends Vue {
  @Prop({ type: Boolean, default: false }) readonly disabled!: boolean;

  @Prop({ type: Function }) readonly clearQuery!: (key: string) => boolean;

  @Prop({ type: Function }) readonly filter!: () => boolean;

  @Prop({ type: String }) readonly title!: string;

  @Prop({ type: String }) readonly value!: string;

  @Prop({ type: String }) readonly activeValue!: string;

  isClose = false;

  isActive = false;

  finalActiveVal = '';

  amountQueryKey = '';

  showFilterBtn = false;

  today = moment().format('YYYY-MM-D');

  startOfWeek = moment().startOf('week').format('YYYY-MM-D');

  endOfWeek = moment().endOf('week').format('YYYY-MM-D');

  startOfMonth = moment().startOf('jMonth').format('YYYY-MM-D');

  endOfMonth = moment().endOf('jMonth').format('YYYY-MM-D');

  lastMonth = moment().subtract(1, 'jMonth').format('YYYY-MM-D');

  lastWeek = moment().subtract(1, 'week').format('YYYY-MM-D');

  toggleClose() {
    this.isClose = !this.isClose;
  }

  @Watch('isClose')
  isCloser() {
    this.$emit('isCloser', this.isClose);
  }

  clearHandler() {
    this.isClose = true;
    if (this.amountQueryKey) {
      this.clearQuery(this.amountQueryKey);
    } else {
      this.clearQuery(this.value);
    }
  }

  buttonHandler() {
    this.isClose = true;
    this.filter();
  }

  updateValuequeries() {
    const queries = this.$route?.query;
    const queryKeys = queries ? Object.keys(queries) : [];
    const amountList = ['min_amount', 'range_amount', 'max_amount', 'amount'];
    if (queries !== undefined) {
      queryKeys.forEach((i) => {
        if (this.value === 'amount') {
          // update value based on query
          const queryAmount = queryKeys.filter((el) => amountList.includes(el))[0];
          if (queryAmount) {
            const amountVal = JSON.parse(JSON.stringify(this.$route.query[queryAmount]));
            this.amountQueryKey = queryAmount;

            this.isActive = true;
            this.finalActiveVal = this.activeValue ? this.activeValue : amountVal;

            if (amountVal) {
              if (queryAmount === 'range_amount') {
                this.finalActiveVal = `از ${(this as any).$options.filters.numberFormat(amountVal[0])} تا ${(
                  this as any
                ).$options.filters.numberFormat(amountVal[1])}
                  ${this.$i18n.t('common.rial')}
                  `;
              } else {
                this.finalActiveVal = `${this.$i18n.t(`common.export.${queryAmount}`)} ${(
                  this as any
                ).$options.filters.numberFormat(amountVal)} ${this.$i18n.t('common.rial')}`;
              }
            }
          } else {
            this.isActive = false;
            this.finalActiveVal = '';
          }
        } else if (queries && queryKeys.includes(this.value)) {
          if (i === this.value) {
            if (queries[i]) {
              this.isActive = true;
              this.finalActiveVal = this.activeValue;
              if (this.value === 'date') {
                let dateVal = JSON.parse(JSON.stringify(this.$route.query.date));
                if (typeof dateVal === 'string') {
                  if (dateVal === this.today) {
                    this.finalActiveVal = this.$i18n.t('common.export.today') as string;
                  } else {
                    const formattedValue = moment(dateVal, 'YYYY-M-D').format('jYYYY/jM/jD');
                    dateVal = [formattedValue, formattedValue];
                    this.finalActiveVal = dateVal;
                  }
                } else if (dateVal[0] === this.startOfWeek && dateVal[1] === this.endOfWeek) {
                  this.finalActiveVal = this.$i18n.t('common.export.current_week') as string;
                } else if (dateVal[0] === this.startOfMonth && dateVal[1] === this.endOfMonth) {
                  this.finalActiveVal = this.$i18n.t('common.export.current_month') as string;
                } else if (dateVal[0] === this.lastMonth && dateVal[1] === this.today) {
                  this.finalActiveVal = this.$i18n.t('common.export.prev_month') as string;
                } else if (dateVal[0] === this.lastWeek && dateVal[1] === this.today) {
                  this.finalActiveVal = this.$i18n.t('common.export.7_days') as string;
                } else {
                  const firstFormattedValue = moment(dateVal[0], 'YYYY-M-D').format('jYYYY/jM/jD');
                  const secondFormattedValue = moment(dateVal[1], 'YYYY-M-D').format('jYYYY/jM/jD');
                  this.finalActiveVal = `از ${firstFormattedValue} تا ${secondFormattedValue}`;
                }
              }
            } else {
              this.isActive = false;
              this.finalActiveVal = '';
            }
          }
        } else {
          this.isActive = false;
          this.finalActiveVal = '';
        }
      });
      if (queries[this.value]) {
        if (typeof queries[this.value] === 'string' && (queries[this.value] as string).toUpperCase() === 'ALL') {
          this.isActive = false;
          this.finalActiveVal = '';
        }
      }
    } else {
      this.isActive = false;
      this.finalActiveVal = '';
    }
  }

  mounted(): void {
    this.updateValuequeries();
  }

  @Watch('$route.query')
  refresh() {
    this.updateValuequeries();
  }

  @Watch('toggleClose')
  isCloserValue(): void {
    this.$emit('isCloser', this.isClose);
  }
}
