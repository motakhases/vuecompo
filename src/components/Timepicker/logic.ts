import {
  Vue, Prop, Component,
} from 'vue-property-decorator';
import moment from 'moment-jalaali';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import Icon from '@/components/Icon/index.vue';
import TextField from '@/components/TextField/index.vue';
import { DateMoment, Attributes } from '@/types';
import Button from '@/components/Button/index.vue';

@Component({
  components: {
    TextField,
    Icon,
    VuePersianDatetimePicker,
    Button,
  },
})
export default class Timepicker extends Vue {
  @Prop({ type: String }) value!: string;

  get model(): string {
    return this.getModel();
  }

  set model(value: string) {
    this.$emit('input', value);
  }

  getModel(): string {
    let result: string = this.value;

    // const allowedDateFormats: string[] = ['YYYY/MM/DD', 'YYYY-MM-DD'];

    const validDateHandler = (value: string) => moment(value, 'YYYY-MM-DD', true).isValid();
    if (validDateHandler(this.value[0])) {
      if (moment(this.value[0]).isAfter(this.value[1])) {
        result = [this.value[1], this.value[0]];
      }
    }

    return result;
  }
}
