import { Vue, Component, Prop } from 'vue-property-decorator';

// Components
import { ValidationProvider } from 'vee-validate';
import Button from '@/components/Button/index.vue';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: {
    ValidationProvider,
    Icon,
    Button,
  },
})
export default class TextBox extends Vue {
  @Prop({ type: Boolean, default: false }) readonly disabled?: boolean;

  @Prop({ type: String }) readonly label?: string;

  @Prop({ type: Number }) readonly maxlength?: number;

  @Prop({ type: String }) readonly rules?: string;

  @Prop({ type: String }) readonly hint?: string;

  @Prop({ type: String }) readonly successMessage?: string;

  @Prop({ type: String }) readonly unit?: string;

  @Prop({ type: String, default: 'text' }) readonly type!: string;

  @Prop({ type: String }) readonly separator?: string;

  @Prop({ type: Boolean }) readonly stepper!: boolean;

  @Prop({ type: Boolean }) readonly copyable!: boolean;

  @Prop({ type: Boolean }) readonly readonly!: boolean;

  @Prop({ type: Boolean }) readonly ltr!: boolean;

  @Prop({ type: String }) readonly prefixIcon?: string;

  @Prop({ type: String }) readonly suffixIcon?: string;

  @Prop({ type: String }) readonly placeholder?: string;

  @Prop({ type: String, default: '' }) readonly value!: string;

  isInputFocused = !!this.value.length;

  copyToClipboardText = 'کپی';

  get model(): string | number {
    return this.formattedValue();
  }

  set model(value: string | number) {
    if (this.type === 'number') {
      this.$emit('input', value.toString().replace(/,/g, ''));
    } else {
      this.$emit('input', value);
    }
  }

  onFocusIn(): void {
    this.isInputFocused = true;
  }

  onFocusOut(): void {
    if (!this.value) {
      this.isInputFocused = false;
    }
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

  // eslint-disable-next-line class-methods-use-this
  toEnNumber(payload: number | string): string {
    const modifiedToEnNumber = payload
      .toString()
      .replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d: string) => (d.charCodeAt(0) - 1632).toString())
      .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, (d: string) => (d.charCodeAt(0) - 1776).toString());

    return payload === '' ? payload : modifiedToEnNumber;
  }

  onlyNumber(event: KeyboardEvent): boolean | void {
    if (this.type === 'number') {
      if (!/\d/.test(event.key) && event.key !== '.') {
        return event.preventDefault();
      }
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

    this.copyToClipboardText = 'کپی شد';

    setTimeout(() => {
      this.copyToClipboardText = 'کپی';
    }, 1000);
  }
}
