import { Component, Prop, Vue } from 'vue-property-decorator';

// Icons
import Box from './icons/Box.vue';
import Letter from './icons/Letter.vue';
import LetterOpen from './icons/LetterOpen.vue';
import ChatMessage from './icons/ChatMessage.vue';
import CreditCheckout from './icons/CreditCheckout.vue';
import ChevronUp from './icons/ChevronUp.vue';
import DrpItemCheck from './icons/DrpItemCheck.vue';
import GridLayout from './icons/GridLayout.vue';
import PaymentCard from './icons/PaymentCard.vue';
import AngleDown from './icons/AngleDown.vue';
import AngleRight from './icons/AngleRight.vue';
import AngleLeft from './icons/AngleLeft.vue';
import AngleUp from './icons/AngleUp.vue';
import CheckmarkCircle from './icons/CheckmarkCircle.vue';
import FilledArrowDown from './icons/FilledArrowDown.vue';
import FilledArrowUp from './icons/FilledArrowUp.vue';
import TickLarge from './icons/TickLarge.vue';
import TickSmall from './icons/TickSmall.vue';
import Warning from './icons/Warning.vue';
import WarningOutline from './icons/WarningOutline.vue';
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
import AlarmTime from './icons/AlarmTime.vue';
import Star from './icons/Star.vue';
import NightModeCircle from './icons/NightModeCircle.vue';
import NightModeSquare from './icons/NightModeSquare.vue';
import DotsMenu from './icons/DotsMenu.vue';
import UndoneCheck from './icons/UndoneCheck.vue';
import Product from './icons/Product.vue';
import ExitLogOut from './icons/ExitLogOut.vue';
import Calendar from './icons/Calendar.vue';
import BankSignalSquare from './icons/BankSignalSquare.vue';
import CheckMarkCircleOutlined from './icons/CheckMarkCircleOutlined.vue';
import Copy from './icons/Copy.vue';
import Cloud from './icons/Cloud.vue';
import Clip from './icons/Clip.vue';
import CreditCardCheckmark from './icons/CreditCardCheckmark.vue';
import Discount from './icons/Discount.vue';
import DollarFill from './icons/DollarFill.vue';
import ExportArrowTopLeft from './icons/ExportArrowTopLeft.vue';
import Filters from './icons/Filter.vue';
import EyeShow from './icons/EyeShow.vue';
import EyeHidden from './icons/EyeHidden.vue';
import IndeterminateFill from './icons/IndeterminateFill.vue';
import InvoicePlus from './icons/InvoicePlus.vue';
import Invoice from './icons/Invoice.vue';
import InfoFill from './icons/InfoFill.vue';
import MessageEditFill from './icons/MessageEditFill.vue';
import PenAddNote from './icons/PenAddNote.vue';
import PenEditSingle from './icons/PenEditSingle.vue';
import PenEdit from './icons/PenEdit.vue';
import QrCode from './icons/QrCode.vue';
import Search from './icons/Search.vue';
import SettingsRound from './icons/SettingsRound.vue';
import Share from './icons/Share.vue';
import Instagram from './icons/Instagram.vue';
import Telegram from './icons/Telegram.vue';
import ThumbsDown from './icons/ThumbsDown.vue';
import ThumbsUp from './icons/ThumbsUp.vue';
import Trash from './icons/Trash.vue';
import Whatsapp from './icons/Whatsapp.vue';
import Download from './icons/Download.vue';
import Reload from './icons/Reload.vue';
import RatingEdit from './icons/RatingEdit.vue';
import DarkMode from './icons/DarkMode.vue';
import CodeBlock from './icons/CodeBlock.vue';
import OfficialBadge from './icons/OfficialBadge.vue';
import Github from './icons/Github.vue';
import Link from './icons/Link.vue';
import Minus from './icons/Minus.vue';
import Info from './icons/Info.vue';
import Pin from './icons/Pin.vue';
import Refund from './icons/Refund.vue';
import FilledDelete from './icons/FilledDelete.vue';
import Refresh from './icons/Refresh.vue';
import Telegram2 from './icons/Telegram2.vue';
import AtSign from './icons/AtSign.vue';
import CircleDelete from './icons/CircleDelete.vue';
import ExcelColor from './icons/ExcelColor.vue';
import Premium from './icons/Premium.vue';
import PinFill from './icons/PinFill.vue';
import UserCircle from './icons/UserCircle.vue';
import MoonStar from './icons/MoonStar.vue';
import AttachLink from './icons/AttachLink.vue';
import LightTheme from './icons/LightTheme.vue';
import DarkTheme from './icons/DarkTheme.vue';

@Component({
  components: {
    Refund,
    Box,
    Pin,
    ChatMessage,
    CreditCheckout,
    ChevronUp,
    CheckmarkCircle,
    Clip,
    Copy,
    Cloud,
    CreditCardCheckmark,
    DrpItemCheck,
    GridLayout,
    PaymentCard,
    AngleDown,
    AngleRight,
    AngleLeft,
    AngleUp,
    FilledArrowDown,
    FilledArrowUp,
    TickLarge,
    TickSmall,
    Warning,
    WarningOutline,
    MenuBurger,
    Profile,
    UserProfileSquare,
    ProfileFill,
    QuestionCircle,
    Notification,
    ChartSquare,
    Plus,
    Terminal,
    Invoice,
    Delete,
    ClockRefresh,
    ArrowLeft,
    ArrowRight,
    ArrowFirst,
    ArrowLast,
    AlarmTime,
    Star,
    NightModeCircle,
    NightModeSquare,
    DotsMenu,
    UndoneCheck,
    Product,
    ExitLogOut,
    Calendar,
    BankSignalSquare,
    CheckMarkCircleOutlined,
    Reload,
    Letter,
    LetterOpen,
    Discount,
    DollarFill,
    ExportArrowTopLeft,
    Filters,
    EyeShow,
    EyeHidden,
    IndeterminateFill,
    InvoicePlus,
    InfoFill,
    MessageEditFill,
    PenAddNote,
    PenEditSingle,
    PenEdit,
    QrCode,
    RatingEdit,
    Search,
    SettingsRound,
    Share,
    Download,
    Instagram,
    Telegram,
    Trash,
    ThumbsDown,
    ThumbsUp,
    Whatsapp,
    DarkMode,
    CodeBlock,
    OfficialBadge,
    Github,
    Link,
    Minus,
    Info,
    FilledDelete,
    Refresh,
    Telegram2,
    AtSign,
    CircleDelete,
    ExcelColor,
    Premium,
    PinFill,
    UserCircle,
    MoonStar,
    AttachLink,
    LightTheme,
    DarkTheme,
  },
})
export default class Icon extends Vue {
  @Prop({ type: String, required: true }) readonly name!: string

  get iconComponent(): string {
    return this.name;
  }
}
