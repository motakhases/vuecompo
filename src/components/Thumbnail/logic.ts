import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import BankLogos from '@/components/BankLogos/index.vue';

@Component({
  components: { Icon, BankLogos },
})
export default class Thumbnail extends Vue {
  @Prop({ type: String }) readonly icon?: string;

  @Prop({ type: String }) readonly logo?: string;

  @Prop({ type: String }) readonly img?: string;

  @Prop({ type: String }) readonly alt?: string;
}

