import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import BankLogos from '@/components/BankLogos/index.vue';
import PSPLogos from '@/components/PSPLogos/index.vue';

@Component({
  components: { Icon, BankLogos, PSPLogos },
})
export default class Thumbnail extends Vue {
  @Prop({ type: String }) readonly icon?: string;

  @Prop({ type: String }) readonly logo?: string;

  @Prop({ type: String }) readonly pspLogo?: string;

  @Prop({ type: String }) readonly img?: string;

  @Prop({ type: String }) readonly alt?: string;

  @Prop({ type: String, default: 'medium' }) readonly size?: string;
}
