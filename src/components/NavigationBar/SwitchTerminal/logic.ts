import Vue from 'vue';
import Thumbnail from '../../Thumbnail/index.vue';
import Icon from '../../Icon/index.vue';
import Overview from '../Overview/index.vue';
import Create from '../Create/index.vue';

export default Vue.extend({
  name: 'SwitchTerminal',

  components: {
    Thumbnail,
    Icon,
    Overview,
    Create,
  },

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
    show: {
      type: Boolean,
      default: false,
    },
    toggle: {
      type: Function,
      default: () => {
        console.log('d');
      },
    }
    ,
  },

  methods: {
    // toggle() {
    //   this.$emit('update', !this.show);
    //   console.log('me');
    // },
  },
});
