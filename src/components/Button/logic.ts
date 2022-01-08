import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: { Icon },
})
export default class Button extends Vue {
  @Prop({ type: String }) readonly text!: string

  @Prop({ type: String }) readonly icon!: string

  @Prop({ type: String }) readonly beforeIcon!: string

  @Prop({ type: String }) readonly afterIcon!: string

  @Prop({ type: String, default: 'medium' }) readonly size!: string

  @Prop({ type: String, default: 'primary' }) readonly type!: string

  @Prop({ type: Boolean, default: false }) readonly disabled!: boolean

  @Prop({ type: Boolean, default: false }) readonly fill!: boolean

  @Prop({ type: Boolean, default: false }) readonly loading!: boolean
}
