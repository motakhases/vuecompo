import {
  Vue, Component, Prop, VModel,
} from 'vue-property-decorator';
import Skeleton from '@/components/Skeleton/index.vue';

@Component({ components: { Skeleton } })
export default class Radio extends Vue {
  @VModel({ type: String }) model!: string

  @Prop({ type: String, required: true }) readonly val!: string

  @Prop({ type: String, required: true }) readonly name!: string

  @Prop({ type: String }) readonly text?: string

  @Prop({ type: Boolean }) readonly disabled?: boolean

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;
}
