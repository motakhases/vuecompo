import { Vue, Prop, Component } from 'vue-property-decorator';
import Thumbnail from '../../Thumbnail/index.vue';
import Icon from '../../Icon/index.vue';
import Overview from '../Overview/index.vue';
import Create from '../Create/index.vue';

@Component({
  components: {
    Icon,
    Thumbnail,
    Overview,
    Create,
  },
})
export default class SwitchTerminal extends Vue {
  @Prop({ type: Boolean, default: false }) active!: boolean;

  @Prop({ type: String, required: true }) title!: string;

  @Prop({ type: String, required: true }) link!: string;

  @Prop({ type: String }) icon?: string;

  @Prop({ type: String }) img?: string;

  @Prop({ type: String }) alt?: string;

  @Prop({ type: Boolean, default: false }) isFocused?: boolean;
}
