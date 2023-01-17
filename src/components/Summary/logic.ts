import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import Tooltip from '@/components/Tooltip/index.vue';
import { ISummaryOptions } from '@/types';
import Loading from './Loading/index.vue';

@Component({
  components: { Icon, Tooltip, Loading },
})
export default class Summary extends Vue {
  @Prop({ type: Array }) readonly options!: ISummaryOptions[];

  @Prop({ type: Number, default: 1 }) readonly loadingNumber!: number;

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;
}
