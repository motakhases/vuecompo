import Vue from 'vue';

const icons: any = {
  /* eslint-disable global-require */

  ChevronUp: require('../icons/ChevronUp.vue'),
  // ...
};
export default Vue.extend({
  name: 'BaseIcon',

  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value);
      },
    },
  },

  computed: {
    iconComponent(): string {
      return icons[this.name];
    },
  },
});
