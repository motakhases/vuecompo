import {
  Component, Prop, Vue, Ref, Watch,
} from 'vue-property-decorator';

@Component
export default class SingleOtpInput extends Vue {
  @Prop({ type: String, default: '' }) readonly value!: string

  @Prop({ type: Boolean }) readonly focus?: boolean

  @Prop({ type: Boolean, default: false }) readonly error?: boolean

  @Prop({ type: Boolean }) readonly shouldAutoFocus?: boolean

  @Prop({ type: String, default: 'tel' }) readonly inputType!: string;

  @Ref('input') readonly input!: HTMLInputElement;

  model = this.value || ''

  handleOnChange() {
    if (this.model.length > 1) {
      this.model = this.model.slice(0, 1);
    }
    return this.$emit('on-change', this.model);
  }

  handleOnKeyDown(event) {
    // Only allow characters 0-9, DEL, Backspace and Pasting
    const keyEvent = (event) || window.event;
    const charCode = (keyEvent.which) ? keyEvent.which : keyEvent.keyCode;
    if (this.isCodeNumeric(charCode)
        || (charCode === 8)
        || (charCode === 86)
        || (charCode === 46)) {
      this.$emit('on-keydown', event);
    } else {
      keyEvent.preventDefault();
    }
  }

  isCodeNumeric(charCode: number) {
    // numeric keys and numpad keys
    return (charCode >= 48 && charCode <= 57) || (charCode >= 96 && charCode <= 105);
  }

  handleOnPaste(event: Event) {
    return this.$emit('on-paste', event);
  }

  handleOnFocus() {
    this.input.select();
    return this.$emit('on-focus');
  }

  handleOnBlur() {
    return this.$emit('on-blur');
  }

  mounted() {
    if (this.input && this.focus && this.shouldAutoFocus) {
      this.input.focus();
    }
  }

  @Watch('value')
  valueChange(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.model = newValue;
    }
  }

  // whenever focus changes, this function will run
  @Watch('focus')
  focusChange(newFocusValue: string, oldFocusValue: string) {
    // Check if focusedInput changed
    // Prevent calling function if input already in focus
    if (oldFocusValue !== newFocusValue && (this.input && this.focus)) {
      this.input.focus();
      this.input.select();
    }
  }
}
