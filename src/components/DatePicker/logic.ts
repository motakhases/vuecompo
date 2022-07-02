import {
  Vue, Prop, Component,
} from 'vue-property-decorator';
import moment from 'moment-jalaali';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import Icon from '@/components/Icon/index.vue';
import TextField from '@/components/TextField/index.vue';
import { DateMoment, Attributes, DatePickerValue } from '@/types';
import Button from '@/components/Button/index.vue';

@Component({
  components: {
    TextField,
    Icon,
    VuePersianDatetimePicker,
    Button,
  },
})
export default class DatePicker extends Vue {
  @Prop({ type: Boolean, default: false }) range?: boolean;

  @Prop({ type: Boolean, default: false }) disableSingle?: boolean;

  @Prop({ type: Boolean, default: false }) disableStart?: boolean;

  @Prop({ type: Boolean, default: false }) disableEnd?: boolean;

  @Prop({ type: Boolean, default: false }) preview?: boolean;

  @Prop({ type: [String, Array] }) value!: DatePickerValue;

  @Prop({ type: Boolean }) dropdown?: boolean;

  isDrpShow: null|boolean = null

  mounted() {
    console.log(this.$refs.input);
    const inputRef = this.$refs.input;

    if (inputRef) {
      const { $el }:any = this.$refs.input;
      const elInput = $el.querySelector('input');

      elInput.addEventListener('focus', () => {
        this.isDrpShow = true;
      });
      elInput.addEventListener('blur', () => {
        this.isDrpShow = false;
      });
    }
  }

  get model(): string | string[] {
    return this.getModel();
  }

  set model(value: string | string[]) {
    this.$emit('input', value);
  }

  getModel(): DatePickerValue {
    let result: DatePickerValue = this.value;

    // const allowedDateFormats: string[] = ['YYYY/MM/DD', 'YYYY-MM-DD'];

    const validDateHandler = (value: string) => moment(value, 'YYYY-MM-DD', true).isValid();
    if (validDateHandler(this.value[0])) {
      if (moment(this.value[0]).isAfter(this.value[1])) {
        result = [this.value[1], this.value[0]];
      }
    }

    return result;
  }

  highlightToday(formatted: string, dateMoment: DateMoment): Attributes {
    const attributes = {} as Attributes;
    if (dateMoment.format('YYYY/MM/DD') === moment().format('YYYY/MM/DD')) {
      attributes.class = 'is-today';
    }
    return attributes;
  }
}
