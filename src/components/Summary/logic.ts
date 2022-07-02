import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import Tooltip from '@/components/Tooltip/index.vue';
import { ISummaryOptions } from '@/types';

@Component({
  components: { Icon, Tooltip },
})
export default class Summary extends Vue {
  @Prop({ type: Array }) readonly options!: ISummaryOptions[]
}
