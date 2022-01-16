import {
  Vue, Prop, Component, VModel,
} from 'vue-property-decorator';
import moment from 'moment-jalaali';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import Icon from '@/components/Icon/index.vue';
import TextField from '@/components/TextField/index.vue';
import Button from '@/components/Button/index.vue';
import { DateMoment, Attributes, DatePickerValue } from '@/types';

@Component({
  components: {
    TextField,
    Button,
    Icon,
    VuePersianDatetimePicker,
  },
})
export default class Pagination extends Vue {
  @VModel({ type: [String, Array] }) model!: DatePickerValue

  @Prop({ type: Boolean, default: false }) range ?: boolean

  @Prop({ type: Boolean, default: false }) disableSingle ?: boolean

  @Prop({ type: Boolean, default: false }) disableStart ?: boolean

  @Prop({ type: Boolean, default: false }) disableEnd ?: boolean

  @Prop({ type: Boolean, default: false }) preview ?: boolean

  @Prop({ type: [String, Array] }) value !: DatePickerValue

  getModel(): DatePickerValue {
    let result:DatePickerValue = this.value;

    if (moment(this.value[0]).isAfter(this.value[1])) {
      result = [this.value[1], this.value[0]];
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
