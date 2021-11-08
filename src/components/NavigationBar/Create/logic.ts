import Vue from 'vue';
import Thumbnail from '../../Thumbnail/index.vue';

export default Vue.extend({
  name: 'Create',
  components: { Thumbnail },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: '',
    },
  },
});
