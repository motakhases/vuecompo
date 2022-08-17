import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
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
  @Prop({ type: Boolean, default: false }) readonly isOpen!: boolean

  @Prop({ type: Function }) readonly toggle!: () => boolean

  @Prop({ type: Function }) readonly clearQuery!: (key: string) => boolean

  @Prop({ type: Function }) readonly filter!: () => boolean

  @Prop({ type: String }) readonly title!: string

  @Prop({ type: String }) readonly value!: string

  @Prop({ type: String }) readonly activeValue!: string

  isClose = false

  isActive= false

 finalActiveVal=''

amountQueryKey=''

toggleClose() {
  this.isClose = !this.isClose;
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
  const queries = this.$route.query;
  const queryKeys = Object.keys(queries);
  const amountList = ['min_amount', 'range_amount', 'max_amount', 'amount'];
  if (queryKeys.length) {
    queryKeys.forEach((i) => {
      if (this.value === 'amount') {
        // update value based on query
        Object.keys(this.$route.query).forEach((key) => {
          if (amountList.includes(key)) {
            const amountVal = JSON.parse(JSON.stringify(this.$route.query[key]));
            this.amountQueryKey = key;

            this.isActive = true;
            this.finalActiveVal = this.activeValue ? this.activeValue : amountVal;
          } else {
            this.isActive = false;
            this.finalActiveVal = '';
          }
        });
      } else if (queryKeys.includes(this.value)) {
        if ((i === this.value)) {
          if (queries[i]) {
            this.isActive = true;
            this.finalActiveVal = this.activeValue;
            if (this.value === 'date') {
              let dateVal = JSON.parse(JSON.stringify(this.$route.query.date));
              if (typeof dateVal === 'string') {
                const formattedValue = moment(dateVal, 'jYYYY-jM-jD').format('jYYYY/jM/jD');
                dateVal = [formattedValue, formattedValue];
                this.finalActiveVal = this.activeValue ? this.activeValue : `${formattedValue}`;
              } else {
                const firstFormattedValue = moment(dateVal[0], 'jYYYY-jM-jD').format('jYYYY/jM/jD');
                const secondFormattedValue = moment(dateVal[1], 'jYYYY-jM-jD').format('jYYYY/jM/jD');
                dateVal = [firstFormattedValue, secondFormattedValue];
                this.finalActiveVal = this.activeValue ? this.activeValue : `از ${firstFormattedValue} تا ${secondFormattedValue}`;
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
      //  if (i === this.value) {
      //    console.log('i', i);
      //    if (queries[i].length) {
      //      this.isActive = true;
      //      this.finalActiveVal = this.activeValue;
      //    } else {
      //      console.log('nadare');
      //      this.isActive = false;
      //      this.finalActiveVal = '';
      //    }
      //  } else {
      //    console.log('i nis', i);
      //    this.isActive = false;
      //  }
    });
  } else {
    //  this.isActive = false;
  }
  //  if (queryKeys.length) {
  //    queryKeys.forEach((key) => {
  //      console.log(key, 'key');
  //      console.log(queryKeys.includes(this.value));
  //      //  if (queryKeys.includes(this.value)) {
  //      //    if (queries[key].length > 0) {
  //      //      console.log('has val', queries[key]);
  //      //      this.isActive = true;
  //      //      this.finalActiveVal = this.activeValue;
  //      //      //  if (this.value === 'date') {
  //      //      //    let dateVal = JSON.parse(JSON.stringify(this.$route.query.date));
  //      //      //    if (typeof dateVal === 'string') {
  //      //      //      const formattedValue = moment(dateVal, 'jYYYY-jM-jD').format('jYYYY/jM/jD');
  //      //      //      dateVal = [formattedValue, formattedValue];
  //      //      //      this.finalActiveVal = `${formattedValue}`;
  //      //      //    } else {
  //      //      //      const firstFormattedValue = moment(dateVal[0], 'jYYYY-jM-jD').format('jYYYY/jM/jD');
  //      //      //      const secondFormattedValue = moment(dateVal[1], 'jYYYY-jM-jD').format('jYYYY/jM/jD');
  //      //      //      dateVal = [firstFormattedValue, secondFormattedValue];
  //      //      //      this.finalActiveVal = `از ${firstFormattedValue} تا ${secondFormattedValue}`;
  //      //      //    }
  //      //      //  }
  //      //    } else {
  //      //      //  this.isActive = false;
  //      //      //  this.finalActiveVal = '';
  //      //    }
  //      //  }
  //    });

  // Object.keys(this.$route.query).forEach((key) => {
  //   if (amountList.includes(key) && this.value === 'amount') {
  //     queryKeys.splice(this.value.indexOf(key), 1, 'amount');
  //     this.$emit(
  //       'input',
  //       queryKeys,
  //     );
  //     // this.isActive = true;
  //   } else {
  //     this.$emit('input', queryKeys);
  //     // this.isActive = !!queryKeys.filter((i) => i === this.val).length;
  //   }
  // });
  //  } else {
  //    this.$emit('input', []);
  //  }
}

mounted(): void {
  this.updateValuequeries();
}

  @Watch('$route.query')
refresh() {
  this.updateValuequeries();
}
}
