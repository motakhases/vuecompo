import {
  Vue, Component, Prop, VModel,
} from 'vue-property-decorator';
import Skeleton from '@/components/Skeleton/index.vue';

@Component({ components: { Skeleton } })
export default class CheckBox extends Vue {
  @VModel({ type: [Array, Boolean] }) model!: string[] | boolean

  @Prop({ type: [String, Number] }) readonly val?: string | number | null

  @Prop({ type: String, required: true }) readonly name!: string

  @Prop({ type: String }) readonly text?: string

  @Prop({ type: Boolean }) readonly disabled?: boolean

  @Prop({ type: Function, default: () => 1 }) readonly change?: () => number

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;
}
