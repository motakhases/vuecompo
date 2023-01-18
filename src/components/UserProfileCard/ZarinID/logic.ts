import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: { Icon },
})
export default class ZarinID extends Vue {
  @Prop({ type: String, required: true }) readonly id!: string

  @Prop({ type: String, default: 'beginner' }) readonly type!: string
}
