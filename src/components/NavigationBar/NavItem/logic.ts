import {
  Vue, Prop, Component,
} from 'vue-property-decorator';

// Components
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

  @Prop({ type: [String, Object] }) link!: string | { name?: string, path?: string }

  @Prop({ type: String }) icon!: string

  @Prop({ type: String }) title!: string

  @Prop({ type: String }) badge!: string
}
