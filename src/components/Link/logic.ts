import Vue from 'vue';

export default Vue.extend({
  name: 'Link',

  props: {
    href: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
    exact: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      // today: moment().format('jYYYY/jMM/jDD'),
    };
  },
  computed: {
    linkComponentDetector() {
      return this.href ? 'a' : 'a';
    },
  },
});
