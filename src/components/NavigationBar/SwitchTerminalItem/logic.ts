import Vue from 'vue';
import Thumbnail from '../../Thumbnail/index.vue';
import Icon from '../../Icon/index.vue';
import StoreStatus from '../../StoreStatus/index.vue';

export default Vue.extend({
  name: 'SwitchTerminalItem',

  components: { Thumbnail, Icon, StoreStatus },

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
    img: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    state: {
      type: String,
      default: '',
    },
  },

  methods: {
    stateText(state:string):string {
      let statusText = '';

      switch (state) {
      case 'ACTIVE':
        statusText = 'فعال';
        break;
      default:
        break;
      }

      return statusText;
    },
  },
});
