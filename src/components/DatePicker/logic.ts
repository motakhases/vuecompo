import {
  Vue, Prop, Component, Watch,
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

  @Prop({ type: Boolean }) button?: boolean;

  isDrpShow: null | boolean = null;

  buttonText = moment().format('jD jMMMM');

  mounted() {
    /**
     * Open dropdown in input focus
     */
    const inputRef = this.$refs.input;
    if (inputRef) {
      const { $el }: any = this.$refs.input;
      const elInput = $el.querySelector('input');
      elInput.addEventListener('focus', () => {
        this.isDrpShow = true;
      });
    }
    /**
     * Click out: close dropdown
     */
    document.addEventListener('click', (e: any) => {
      let me = false;
      for (let index = 0; index < e.path.length; index += 1) {
        const element = e.path[index];
        if (element.id === 'dropdown') {
          me = true;
          return;
        }
      }
      if (!me) this.isDrpShow = false;
    });
    if (this.value) {
      this.buttonText = moment(this.value, 'jYYYY-jM-jD').format('jD jMMMM');
    }
  }

  get model(): string | string[] {
    return this.getModel();
  }

  set model(value: string | string[]) {
    const result = value || '';
    this.$emit('input', result);
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

    return result || '';
  }

  highlightToday(formatted: string, dateMoment: DateMoment): Attributes {
    const attributes = {} as Attributes;
    if (dateMoment.format('YYYY/MM/DD') === moment().format('YYYY/MM/DD')) {
      attributes.class = 'is-today';
    }
    return attributes;
  }

  toggleDropdown() {
    if (this.isDrpShow) {
      this.isDrpShow = false;
    } else {
      this.isDrpShow = true;
    }
  }

  /**
   * Close dropdown after value is chosen
   */
  @Watch('model')
  onModelChange(value: string) {
    if (value) {
      this.isDrpShow = false;
      this.buttonText = moment(this.value, 'jYYYY/jM/jD').format('jD jMMMM');
      const valueYear = moment(this.value, 'jYYYY/jM/jD').format('jYYYY');
      const currentYear = moment().format('jYYYY');
      if (valueYear === currentYear) {
        this.buttonText = moment(this.value, 'jYYYY/jM/jD').format('jD jMMMM');
      } else {
        this.buttonText = moment(this.value, 'jYYYY/jM/jD').format('jD jMMMM jYYYY');
      }
    }
  }
}
