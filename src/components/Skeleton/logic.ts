import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: { Icon },
})
export default class Skeleton extends Vue {
  @Prop({ type: String, default: 'body' }) readonly type!: string

  @Prop({ type: String, default: 'light' }) readonly color?: string
}
