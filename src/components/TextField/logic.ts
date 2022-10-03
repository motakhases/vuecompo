import {
  Vue, Component, Prop, Watch,
} from 'vue-property-decorator';

// Components
import { ValidationProvider } from 'vee-validate';
import Button from '@/components/Button/index.vue';
import Icon from '@/components/Icon/index.vue';
import Tooltip from '@/components/Tooltip/index.vue';
import Skeleton from '@/components/Skeleton/index.vue';

// import '@/utils/validations';

@Component({
  components: {
    ValidationProvider,
    Icon,
    Button,
    Tooltip,
    Skeleton,
  },
})
export default class TextField extends Vue {
  @Prop({ type: Boolean, default: false }) readonly disabled?: boolean;

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;

  @Prop({ type: String }) readonly label?: string;

  @Prop({ type: Number }) readonly maxlength?: number;

  @Prop({ type: [String, Object] }) readonly rules?: string|object;

  @Prop({ type: String }) readonly inputName?: string;

  @Prop({ type: String }) readonly hint?: string;

  @Prop({ type: String }) readonly successMessage?: string;

  @Prop({ type: String }) readonly unit?: string;

  @Prop({ type: String, default: 'text' }) readonly type!: string;

  @Prop({ type: String }) readonly separator?: string;

  @Prop({ type: Boolean }) readonly stepper!: boolean;

  @Prop({ type: Boolean }) readonly copyable!: boolean;

  @Prop({ type: Boolean }) readonly readonly!: boolean;

  @Prop({ type: Boolean }) readonly ltr!: boolean;

  @Prop({ type: Boolean, default: false }) readonly maxPreview!: boolean;

  @Prop({ type: Boolean, default: false }) readonly mono?: boolean;

  @Prop({ type: String }) readonly prefixIcon?: string;

  @Prop({ type: String }) readonly suffixIcon?: string;

  @Prop({ type: String }) readonly unitIcon?: string;

  @Prop({ type: String }) readonly placeholder?: string;

  @Prop({ type: String }) readonly min?: string;

  @Prop({ type: Array }) readonly errors?: [];

  @Prop({ type: Boolean }) readonly passed!: boolean;

  @Prop({ type: String, default: '' }) readonly value!: string;

  isInputFocused = false;

  copyToClipboardText = this.$i18n.t('common.copy');

  created() {
    this.isInputFocused = !!this.value.length;
  }

  get model(): string | number {
    return this.formattedValue();
  }

  set model(value: string | number) {
    if (this.type === 'number') {
      this.$emit('input', this.toEnNumber(value).toString().replace(/,/g, ''));
    } else {
      this.$emit('input', value);
    }
  }

  onFocusIn(): void {
    this.isInputFocused = true;
  }

  onFocusOut(e:Event): void {
    if (!this.value) {
      this.isInputFocused = false;
    }
    this.$emit('blur', e);
  }

  formattedValue(): string {
    if (this.type === 'number') {
      switch (this.separator) {
      case 'comma':
        return this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      case 'dash':
        return this.value.replace(/\B(?=(\d{4})+(?!\d))/g, '-');
      default:
        return this.value;
      }
    } else {
      return this.value;
    }
  }

  toEnNumber(payload: number | string): string {
    const modifiedToEnNumber = payload
      .toString()
      .replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d: string) => (d.charCodeAt(0) - 1632).toString())
      .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, (d: string) => (d.charCodeAt(0) - 1776).toString());

    return payload === '' ? payload : modifiedToEnNumber;
  }

  onlyNumber(event: KeyboardEvent): boolean | void {
    if (this.type === 'number') {
      if (!/\d/.test(this.toEnNumber(event.key)) && event.key !== '.') {
        return event.preventDefault();
      }
    }
    // if  there is maxlength check the value length
    if (this.maxlength) {
      if (this.value.length === this.maxlength) {
        return event.preventDefault();
      }
      return true;
    }
    return true;
  }

  increment(): void {
    this.isInputFocused = true;
    if (this.type === 'number') {
      if (this.value.length === 0) {
        this.$emit('input', this.toEnNumber('1'));
      } else {
        const newValue = (Number(this.value) + 1).toString();
        this.$emit('input', this.toEnNumber(newValue));
      }
    }
  }

  decrement(): void {
    const numberValue = Number(this.value);
    if (this.type === 'number' && numberValue > 0) {
      const newValue = (numberValue - 1).toString();
      this.$emit('input', this.toEnNumber(newValue));
    }
  }

  copyToClipboard(): void {
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(this.value);

    this.copyToClipboardText = this.$i18n.t('common.copied');

    setTimeout(() => {
      this.copyToClipboardText = this.$i18n.t('common.copy');
    }, 1000);
  }

  @Watch('value')
  updateLabel() {
    if (this.value.length) {
      this.isInputFocused = true;
    }
  }
}
