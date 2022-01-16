import {
  Vue, Prop, Component,
} from 'vue-property-decorator';
import NavBadge from '../../NavBadge/index.vue';
import Icon from '../../Icon/index.vue';
import Tooltip from '../../Tooltip/index.vue';

@Component({
  components: {
    Icon, NavBadge, Tooltip,
  },
})
export default class NavItem extends Vue {
  @Prop({ type: Boolean, default: false }) active!: boolean

  @Prop({ type: String }) link!: string

  @Prop({ type: String }) icon!: string

  @Prop({ type: String }) title!: string

  @Prop({ type: String }) badge!: string
}
