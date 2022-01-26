import { Component, Prop, Vue } from 'vue-property-decorator';
import Box from './icons/Box.vue';
import ChatMessage from './icons/ChatMessage.vue';
import CreditCheckout from './icons/CreditCheckout.vue';
import ChevronUp from './icons/ChevronUp.vue';
import DrpItemCheck from './icons/DrpItemCheck.vue';
import GridLayout from './icons/GridLayout.vue';
import PaymentCard from './icons/PaymentCard.vue';
import AngleDown from './icons/AngleDown.vue';
import AngleRight from './icons/AngleRight.vue';
import AngleLeft from './icons/AngleLeft.vue';
import CheckmarkCircle from './icons/CheckmarkCircle.vue';
import FilledArrowDown from './icons/FilledArrowDown.vue';
import FilledArrowUp from './icons/FilledArrowUp.vue';
import TickLarge from './icons/TickLarge.vue';
import TickSmall from './icons/TickSmall.vue';
import Warning from './icons/Warning.vue';
import MenuBurger from './icons/MenuBurger.vue';
import Profile from './icons/Profile.vue';
import UserProfileSquare from './icons/UserProfileSquare.vue';
import ProfileFill from './icons/ProfileFill.vue';
import QuestionCircle from './icons/QuestionCircle.vue';
import Notification from './icons/Notification.vue';
import ChartSquare from './icons/ChartSquare.vue';
import Plus from './icons/Plus.vue';
import Terminal from './icons/Terminal.vue';
import Delete from './icons/Delete.vue';
import ClockRefresh from './icons/ClockRefresh.vue';
import ArrowLeft from './icons/ArrowLeft.vue';
import ArrowRight from './icons/ArrowRight.vue';
import ArrowFirst from './icons/ArrowFirst.vue';
import ArrowLast from './icons/ArrowLast.vue';
import Star from './icons/Star.vue';
import NightModeCircle from './icons/NightModeCircle.vue';
import DotsMenu from './icons/DotsMenu.vue';
import UndoneCheck from './icons/UndoneCheck.vue';
import Product from './icons/Product.vue';
import ExitLogOut from './icons/ExitLogOut.vue';
import Calendar from './icons/Calendar.vue';

@Component({
  components: {
    Box,
    ChatMessage,
    CreditCheckout,
    ChevronUp,
    DrpItemCheck,
    GridLayout,
    PaymentCard,
    AngleDown,
    AngleRight,
    AngleLeft,
    CheckmarkCircle,
    FilledArrowDown,
    FilledArrowUp,
    TickLarge,
    TickSmall,
    Warning,
    MenuBurger,
    Profile,
    UserProfileSquare,
    ProfileFill,
    QuestionCircle,
    Notification,
    ChartSquare,
    Plus,
    Terminal,
    Delete,
    ClockRefresh,
    ArrowLeft,
    ArrowRight,
    ArrowFirst,
    ArrowLast,
    Star,
    NightModeCircle,
    DotsMenu,
    UndoneCheck,
    Product,
    ExitLogOut,
    Calendar,
  },
})
export default class Icon extends Vue {
  @Prop({ type: String, required: true }) readonly name!: string

  get iconComponent(): string {
    return this.name;
  }
}
