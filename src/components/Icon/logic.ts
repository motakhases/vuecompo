import Vue from 'vue';

export default Vue.extend({
  name: 'BaseIcon',

  components: {
    chevronUp: () => import('./icons/ChevronUp.vue'),
  },

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    iconComponent() {
      return this.name;
    },
  },
});
