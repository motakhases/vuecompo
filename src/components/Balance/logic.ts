import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import Label from '@/components/Label/index.vue';
import { ISummaryOptions } from '@/types';

@Component({
  components: { Icon, Label },
})
export default class Balance extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string

  @Prop({ type: String, required: true }) readonly amount!: string
}
