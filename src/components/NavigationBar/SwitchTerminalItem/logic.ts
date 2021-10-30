import Vue from 'vue';
import Thumbnail from '../../Thumbnail/index.vue';
import Icon from '../../Icon/index.vue';

export default Vue.extend({
  name: 'SwitchTerminalItem',
  components: { Thumbnail, Icon },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'عنوان درگاه',
    },
    link: {
      type: String,
      default: 'zarinp.al/getway',
    },
    icon: {
      type: String,
      default: '',
    },
  },
});
