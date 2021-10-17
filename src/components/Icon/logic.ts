import Vue from 'vue';

export default Vue.extend({
  name: 'BaseIcon',

  components: {
    chevronUp: () => import('./icons/ChevronUp.vue'),
    angleDown: () => import('./icons/AngleDown.vue'),
    checkmarkCircle: () => import('./icons/CheckmarkCircle.vue'),
    filledArrowDown: () => import('./icons/FilledArrowDown.vue'),
    filledArrowUp: () => import('./icons/FilledArrowUp.vue'),
    tickLarge: () => import('./icons/TickLarge.vue'),
    warning: () => import('./icons/Warning.vue'),
    menuBurger: () => import('./icons/MenuBurger.vue'),
    profile: () => import('./icons/Profile.vue'),
    questionCircle: () => import('./icons/QuestionCircle.vue'),
    notification: () => import('./icons/Notification.vue'),
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
