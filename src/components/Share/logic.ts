import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Social from '@/components/Share/_social/index.vue';
import CopyToClipboard from '@/components/CopyToClipboard/index.vue';
import Button from '@/components/Button/index.vue';
import Icon from '@/components/Icon/index.vue';
import Skeleton from '@/components/Skeleton/index.vue';

@Component({
  components: {
    Button,
    CopyToClipboard,
    Icon,
    Social,
    Skeleton,
  },
})
export default class Share extends Vue {
  @Prop({ type: String, default: '' }) title?: string;

  @Prop({ type: String, default: '' }) text?: string;

  @Prop({ type: String, default: '' }) title2?: string;

  @Prop({ type: String, default: '' }) text2?: string;

  @Prop({ type: String, default: '' }) titlePost?: string;

  @Prop({ type: String, default: '' }) urlTlg?: string;

  @Prop({ type: String, default: '' }) urlWApp?: string;

  @Prop({ type: Boolean, default: false }) noQr?: boolean;

  @Prop({ type: Boolean, default: false }) loading?: boolean;

  get qrcode(): string {
    if (this.text && this.text.match(/^http/)) {
      return `https://tools.zarinpal.com/qr?r=q&s=256&q=${this.text}`;
    }
    return '';
  }

  private socialAdrs:any = {
    telegram: 'https://t.me/share/url',
    whatsapp: 'https://api.whatsapp.com/send',
    twitter: 'https://twitter.com/share',
  }

  private mkScoialUrl(socialName:any, zplAdr:any, text:any) {
    let res; const socialAdr = this.socialAdrs[socialName];
    switch (socialName) {
    case 'telegram': case 'twitter':
      res = `${socialAdr}?url=${zplAdr}`;
      if (text) {
        res += `&text=${text}`;
      }
      break;
    default: // whatsapp
      res = `${socialAdr}?text=${zplAdr}`;
      if (text) {
        res += ` – ${text}`;
      }
    }
    return res;
  }

  get urlAdrTlg() {
    return this.mkScoialUrl('telegram', this.urlTlg, this.titlePost);
  }

  get urlAdrWApp() {
    return this.mkScoialUrl('whatsapp', this.urlWApp, this.titlePost);
  }

  async download(dataUrl: string): Promise<void> {
    if (!this.title) return;
    const link = document.createElement('a');

    link.target = '_blank';
    link.download = this.title;

    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }
}
