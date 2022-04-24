import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Tabs from '@/components/Tabs/index.vue';
import Tab from '@/components/Tabs/Tab/index.vue';
import Button from '@/components/Button/index.vue';
import TextField from '@/components/TextField/index.vue';
import Social from './_social/index.vue';

@Component({
  components: {
    Tab,
    Tabs,
    Social,
    Button,
    TextField,
  },
})
export default class Share extends Vue {
  @Prop({ type: String, required: true }) title!: string;

  @Prop({ type: String, required: true }) url!: string;

  get qrcode(): string {
    return `https://tools.zarinpal.com/qr?r=q&s=256&q=${this.url}`;
  }

  get html(): string {
    return `<a target="_blank" href="${this.url}">پرداخت آنلاین</a>`;
  }

  async download(dataUrl: string): Promise<void> {
    const link = document.createElement('a');

    link.target = '_blank';
    link.download = this.title;

    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }
}
