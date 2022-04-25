import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Icon from '@/components/Icon/index.vue';

@Component({
  components: {
    Icon,
  },
})
export default class Social extends Vue {
  @Prop({ type: String, required: true }) keyName!: string;

  @Prop({ type: String, required: true }) name!: string;

  @Prop({ type: String, required: true }) title!: string;

  @Prop({ type: String, required: true }) url!: string;

  get socials() {
    return {
      telegram: `https://t.me/share/url?url=${this.url}&text=${this.title}`,
      whatsapp: `https://api.whatsapp.com/send?text=${this.url} – ${this.title}`,
      twitter: `https://twitter.com/share?url=${this.url}&text=${this.title}`,
    };
  }
}
