import Vue from 'vue';
import ChevronUp from './icons/ChevronUp.vue';
import AngleDown from './icons/AngleDown.vue';
import CheckmarkCircle from './icons/CheckmarkCircle.vue';
import FilledArrowDown from './icons/FilledArrowDown.vue';
import FilledArrowUp from './icons/FilledArrowUp.vue';
import TickLarge from './icons/TickLarge.vue';
import TickSmall from './icons/TickSmall.vue';
import Warning from './icons/Warning.vue';
import MenuBurger from './icons/MenuBurger.vue';
import Profile from './icons/Profile.vue';
import ProfileFill from './icons/ProfileFill.vue';
import QuestionCircle from './icons/QuestionCircle.vue';
import Notification from './icons/Notification.vue';
import AngleLeft from './icons/AngleLeft.vue';
import ChartSquare from './icons/ChartSquare.vue';
import Plus from './icons/Plus.vue';
import Terminal from './icons/Terminal.vue';
import Delete from './icons/Delete.vue';
import ClockRefresh from './icons/ClockRefresh.vue';
import ArrowRight from './icons/ArrowRight.vue';
import Star from './icons/Star.vue';

export default Vue.extend({
  name: 'Icon',
  components: {
    ChevronUp,
    AngleDown,
    CheckmarkCircle,
    FilledArrowDown,
    FilledArrowUp,
    TickLarge,
    TickSmall,
    Warning,
    MenuBurger,
    Profile,
    ProfileFill,
    QuestionCircle,
    Notification,
    AngleLeft,
    ChartSquare,
    Plus,
    Terminal,
    Delete,
    ClockRefresh,
    ArrowRight,
    Star,
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
