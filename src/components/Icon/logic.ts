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
    tickSmall: () => import('./icons/TickSmall.vue'),
    warning: () => import('./icons/Warning.vue'),
    menuBurger: () => import('./icons/MenuBurger.vue'),
    profile: () => import('./icons/Profile.vue'),
    profileFill: () => import('./icons/ProfileFill.vue'),
    questionCircle: () => import('./icons/QuestionCircle.vue'),
    notification: () => import('./icons/Notification.vue'),
    angleLeft: () => import('./icons/AngleLeft.vue'),
    chartSquare: () => import('./icons/ChartSquare.vue'),
    plus: () => import('./icons/Plus.vue'),
    terminal: () => import('./icons/Terminal.vue'),
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
