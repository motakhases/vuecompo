import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: { Icon },
})
export default class Status extends Vue {
  @Prop({ type: String }) readonly text?: string

  @Prop({ type: String, default: 'neutral' }) readonly type!: string

  @Prop({ type: String }) readonly icon?: string

  @Prop({ type: Boolean, default: false }) readonly indicator!: boolean
}
