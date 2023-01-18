import { Component, Prop, Vue } from 'vue-property-decorator';
import SwitchTerminalItem from '@/components/NavigationBar/SwitchTerminalItem/index.vue';
import Overview from '@/components/NavigationBar/Overview/index.vue';
import Create from '@/components/NavigationBar/Create/index.vue';

@Component({
  components: { SwitchTerminalItem, Overview, Create },
})
export default class TerminalList extends Vue {
  @Prop({ type: Boolean, default: false }) readonly isOpen!: boolean

  @Prop({ type: Function }) toggle!: () => boolean

  @Prop({ type: Array }) terminals!: []
}
