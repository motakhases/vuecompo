/* eslint-disable prefer-destructuring */
import Vue, { PropType } from 'vue';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import moment from 'moment-jalaali';
import Icon from '@/components/Icon/index.vue';
import TextField from '@/components/TextField/index.vue';
import Button from '@/components/Button/index.vue';

declare interface DateMoment {
  format: (a: string) => string,
  param: string
}

declare interface Attributes {
  class: string
}
export default Vue.extend({
  name: 'DatePicker',

  components: {
    Icon, VuePersianDatetimePicker, TextField, Button,
  },

  props: {
    range: {
      type: Boolean,
      default: false,
    },
    disableSingle: {
      type: Boolean,
      default: false,
    },
    disableStart: {
      type: Boolean,
      default: false,
    },
    disableEnd: {
      type: Boolean,
      default: false,
    },
    preview: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Array] as PropType<string[] | string>,
      default: '',
    },
  },

  computed: {
    model: {
      get():string|string[] {
        return this.getModel();
      },
      set(value:string[]):void {
        this.$emit('input', value);
      },
    },
  },

  methods: {
    getModel() {
      let result:string|string[] = this.value;

      if (moment(this.value[0]).isAfter(this.value[1])) {
        result = [this.value[1], this.value[0]];
      }

      return result;
    },

    highlightToday(formatted: string, dateMoment: DateMoment) {
      const attributes = {} as Attributes;
      if (dateMoment.format('YYYY/MM/DD') === moment().format('YYYY/MM/DD')) {
        attributes.class = 'is-today';
      }
      return attributes;
    },
  },
});
