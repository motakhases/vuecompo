import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Tab from '@/components/Tabs/Tab/index.vue';
import Social from '@/components/Share/_social/index.vue';
import { Translation } from '@/types';
import {
  Skeleton, TextField, Button, Tabs, CopyToClipboard, Icon,
} from '@/components';

@Component({
  components: {
    Tab,
    Tabs,
    Button,
    TextField,
    CopyToClipboard,
    Icon,
    Social,
    Skeleton,
  },
})
export default class Share extends Vue {
  @Prop({ type: String }) title!: string;

  @Prop({ type: String }) url!: string;

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;

  get qrcode(): string {
    return `https://tools.zarinpal.com/qr?r=q&s=256&q=${this.url}`;
  }

  get html(): Translation {
    return this.$i18n.t('product.show.html_code', { link: this.url });
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
