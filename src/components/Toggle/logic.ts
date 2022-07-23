import {
  Vue, Component, Prop, VModel,
} from 'vue-property-decorator';
import Skeleton from '@/components/Skeleton/index.vue';

@Component({
  components: {
    Skeleton,
  },
})
export default class Toggle extends Vue {
  @VModel({ type: Boolean }) model!: boolean

  @Prop({ type: Boolean }) readonly disabled?: boolean

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;
}
