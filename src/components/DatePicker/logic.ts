import Vue from 'vue';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import Icon from '../Icon/index.vue';
import TextField from '@/components/TextField/index.vue';

export default Vue.extend({
  name: 'DatePicker',
  components: { Icon, VuePersianDatetimePicker, TextField },
  props: {
    range: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
    preview: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      date: this.range ? [] : '',
      // value: '',
    };
  },

});
