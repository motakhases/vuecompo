import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import SingleOtpInput from './SingleOtpInput/index.vue';
// keyCode constants
const BACKSPACE = 8;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DELETE = 46;

@Component({
  components: { SingleOtpInput, Icon },
})
export default class Otp extends Vue {
  @Prop({ type: String, default: 'tel' }) readonly inputType!: string;

  @Prop({ type: Boolean }) readonly shouldAutoFocus?: boolean;

  @Prop({ type: String }) readonly errorMsg!: string;

  activeInput = 0;

  otp = [];

  oldOtp = [];

  numInputs = 6;

  handleOnFocus(index: number) {
    this.activeInput = index;
  }

  handleOnBlur() {
    this.activeInput = -1;
  }

  // Helper to return OTP from input
  checkFilledAllInputs() {
    if (this.otp.join('').length === this.numInputs) {
      return this.$emit('on-complete', this.otp.join(''));
    }
    return 'Wait until the user enters the required number of characters';
  }

  // Focus on input by index
  focusInput(input: number) {
    this.activeInput = Math.max(Math.min(this.numInputs - 1, input), 0);
  }

  // Focus on next input
  focusNextInput() {
    this.focusInput(this.activeInput + 1);
  }

  // Focus on previous input
  focusPrevInput() {
    this.focusInput(this.activeInput - 1);
  }

  changeCodeAtFocus(value: number | string) {
    this.oldOtp = Object.assign([], this.otp);
    this.$set(this.otp, this.activeInput, value);
    if (this.oldOtp.join('') !== this.otp.join('')) {
      this.$emit('on-change', this.otp.join(''));
      this.checkFilledAllInputs();
    }
  }

  handleOnChange(value: number) {
    this.changeCodeAtFocus(value);
    this.focusNextInput();
  }

  clearInput() {
    if (this.otp.length > 0) {
      this.$emit('on-change', '');
    }
    this.otp = [];
    this.activeInput = 0;
  }

  // Handle pasted OTP
  handleOnPaste(event) {
    event.preventDefault();
    const pastedData = event.clipboardData
      .getData('text/plain')
      .slice(0, this.numInputs - this.activeInput)
      .split('');
    if (this.inputType === 'number' && !pastedData.join('').match(/^\d+$/)) {
      return 'Invalid pasted data';
    }
    // Paste data from focused input onwards
    const currentCharsInOtp = this.otp.slice(0, this.activeInput);
    const combinedWithPastedData = currentCharsInOtp.concat(pastedData);
    this.$set(this, 'otp', combinedWithPastedData.slice(0, this.numInputs));
    this.focusInput(combinedWithPastedData.slice(0, this.numInputs).length);
    return this.checkFilledAllInputs();
  }

  // Handle cases of backspace, delete, left arrow, right arrow
  handleOnKeyDown(event) {
    switch (event.keyCode) {
    case BACKSPACE:
      event.preventDefault();
      this.changeCodeAtFocus('');
      this.focusPrevInput();
      break;
    case DELETE:
      event.preventDefault();
      this.changeCodeAtFocus('');
      break;
    case LEFT_ARROW:
      event.preventDefault();
      this.focusPrevInput();
      break;
    case RIGHT_ARROW:
      event.preventDefault();
      this.focusNextInput();
      break;
    default:
      break;
    }
  }
}
