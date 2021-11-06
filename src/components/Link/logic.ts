import Vue from 'vue';

export default Vue.extend({
  name: 'Link',
  props: {
    href: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
    rel: {
      type: String,
      default: '',
    },
    replace: {
      type: Boolean,
      default: false,
    },
    exact: {
      type: Boolean,
      default: false,
    },
    append: {
      type: Boolean,
      default: false,
    },
  },
});
