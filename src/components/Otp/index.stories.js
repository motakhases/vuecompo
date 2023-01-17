import Otp from './index.vue';
import Button from '../Button/index.vue';

export default {
  component: Otp,
  title: 'Components/Otp',
};

const Template = (_, { argTypes }) => ({
  components: { Otp, Button },
  props: Object.keys(argTypes),
  data() {
    return {
      showValue: false,
      noteValue: '',
    };
  },
  methods: {
    toEnNumber(payload) {
      const modifiedToEnNumber = payload
        .toString()
        .replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d) => (d.charCodeAt(0) - 1632).toString())
        .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, (d) => (d.charCodeAt(0) - 1776).toString());

      return payload === '' ? payload : modifiedToEnNumber;
    },
    handleOnComplete(value) {
      console.log('OTP completed: ', this.toEnNumber(value));
    },
    handleOnChange(value) {
      console.log('OTP changed: ', this.toEnNumber(value));
    },
    handleClearInput() {
      this.$refs.otpInput.clearInput();
    },
  },
  template: `
  <div class="bg-background dark:bg-background-dark p-lg rounded-md flex flex-col gap-md w-[400px]" dir="rtl">


	  <Otp  
    ref="otpInput"
    input-classes="otp-input"
    separator="-"
    :num-inputs="4"
    :should-auto-focus="true"
    :is-input-num="true"
    @on-change="handleOnChange"
    @on-complete="handleOnComplete"
    inputType="tel"
    errorMsg="ارور"
    
    >
    </Otp>
  </div>
  `,
});

export const Default = Template.bind({});
