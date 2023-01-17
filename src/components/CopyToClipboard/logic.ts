import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import Tooltip from '@/components/Tooltip/index.vue';
import Loading from './Loading/index.vue';

@Component({
  components: {
    Icon,
    Tooltip,
    Loading,
  },
})
export default class CopyToClipboard extends Vue {
  @Prop({ type: String }) readonly title?: string;

  @Prop({ type: String }) readonly text!: string;

  @Prop({ type: Boolean }) readonly loading?: boolean;

  copyToClipboardText = this.$i18n.t('common.copied');

  copyToClipboardHandler(): void {
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(this.text);
  }
}
