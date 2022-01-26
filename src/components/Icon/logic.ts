import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Box: () => import('./icons/Box.vue'),
    ChatMessage: () => import('./icons/ChatMessage.vue'),
    CreditCheckout: () => import('./icons/CreditCheckout.vue'),
    ChevronUp: () => import('./icons/ChevronUp.vue'),
    DrpItemCheck: () => import('./icons/DrpItemCheck.vue'),
    GridLayout: () => import('./icons/GridLayout.vue'),
    PaymentCard: () => import('./icons/PaymentCard.vue'),
    AngleDown: () => import('./icons/AngleDown.vue'),
    AngleRight: () => import('./icons/AngleRight.vue'),
    AngleLeft: () => import('./icons/AngleLeft.vue'),
    CheckmarkCircle: () => import('./icons/CheckmarkCircle.vue'),
    FilledArrowDown: () => import('./icons/FilledArrowDown.vue'),
    FilledArrowUp: () => import('./icons/FilledArrowUp.vue'),
    TickLarge: () => import('./icons/TickLarge.vue'),
    TickSmall: () => import('./icons/TickSmall.vue'),
    Warning: () => import('./icons/Warning.vue'),
    MenuBurger: () => import('./icons/MenuBurger.vue'),
    Profile: () => import('./icons/Profile.vue'),
    UserProfileSquare: () => import('./icons/UserProfileSquare.vue'),
    ProfileFill: () => import('./icons/ProfileFill.vue'),
    QuestionCircle: () => import('./icons/QuestionCircle.vue'),
    Notification: () => import('./icons/Notification.vue'),
    ChartSquare: () => import('./icons/ChartSquare.vue'),
    Plus: () => import('./icons/Plus.vue'),
    Terminal: () => import('./icons/Terminal.vue'),
    Delete: () => import('./icons/Delete.vue'),
    ClockRefresh: () => import('./icons/ClockRefresh.vue'),
    ArrowLeft: () => import('./icons/ArrowLeft.vue'),
    ArrowRight: () => import('./icons/ArrowRight.vue'),
    ArrowFirst: () => import('./icons/ArrowFirst.vue'),
    ArrowLast: () => import('./icons/ArrowLast.vue'),
    Star: () => import('./icons/Star.vue'),
    NightModeCircle: () => import('./icons/NightModeCircle.vue'),
    DotsMenu: () => import('./icons/DotsMenu.vue'),
    UndoneCheck: () => import('./icons/UndoneCheck.vue'),
    Product: () => import('./icons/Product.vue'),
    ExitLogOut: () => import('./icons/ExitLogOut.vue'),
    Calendar: () => import('./icons/Calendar.vue'),
  },
})
export default class Icon extends Vue {
  @Prop({ type: String, required: true }) readonly name!: string

  get iconComponent(): string {
    return this.name;
  }
}
