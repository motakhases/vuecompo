import { Component, Prop, Vue } from 'vue-property-decorator';
import Label from '@/components/Label/index.vue';
import Icon from '@/components/Icon/index.vue';
import Loading from './Loading/index.vue';

@Component({
  components: { Label, Icon, Loading },
})
export default class Timeline extends Vue {
  @Prop({ type: String }) readonly title!: string;

  @Prop({ type: String }) readonly subText?: string;

  @Prop({ type: String }) readonly date?: string;

  @Prop({ type: String }) readonly icon!: string;

  @Prop({ type: [String, Number] }) readonly labelText?: string | number;

  @Prop({ type: String }) readonly labelType?: string;

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;

  @Prop({ type: Number, default: 1 }) readonly loadingNumber!: number;
}
