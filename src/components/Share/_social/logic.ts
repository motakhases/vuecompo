import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Icon from '@/components/Icon/index.vue';
import Skeleton from '@/components/Skeleton/index.vue';
import { SocialType } from '@/types';

@Component({
  components: {
    Icon,
    Skeleton,
  },
})
export default class Social extends Vue {
  @Prop({ type: String, required: true }) keyName!: string;

  @Prop({ type: String, default: '' }) name?: string;

  @Prop({ type: String }) title!: string;

  @Prop({ type: String }) url!: string;

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;

  @Prop({ type: String, default: 'circle' }) type?: SocialType;

  get socials() {
    return {
      telegram: `https://t.me/share/url?url=${this.url}&text=${this.title}`,
      whatsapp: `https://api.whatsapp.com/send?text=${this.url} – ${this.title}`,
      twitter: `https://twitter.com/share?url=${this.url}&text=${this.title}`,
    };
  }
}
