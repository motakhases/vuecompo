import {
  Vue, Prop, Component,
} from 'vue-property-decorator';
import Create from '../Create/index.vue';
import Overview from '../Overview/index.vue';
import SwitchTerminal from '../SwitchTerminal/index.vue';
import SwitchTerminalItem from '../SwitchTerminalItem/index.vue';

@Component({
  components: {
    Create, Overview, SwitchTerminal, SwitchTerminalItem,
  },
})
export default class SwitchTerminalPopover extends Vue {
  @Prop({ type: Boolean, default: false }) show!: boolean

  @Prop({ type: Array }) terminals!: []
}
