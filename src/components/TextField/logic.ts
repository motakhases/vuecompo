import Vue from 'vue';

export default Vue.extend({
  name: 'TextField',
  props: {
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: 'label',
    },
    hint: {
      type: String,
      default: 'helper',
    },
    hintText: {
      type: String,
      default: '',
    },
    unit: {
      type: String,
      default: '',
    },
    limit: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      activeLabel: !!this.value.length,
    };
  },
  methods: {
    // update value of input
    onInput(event: any) {
      this.$emit('input', event.target.value);
    },
    onFocusIn() {
      // for adding active label style
      this.activeLabel = true;
    },
    onFocusOut() {
      // if input is empty put label inside input on focusing out
      if (!this.value) {
        this.activeLabel = false;
      }
    },
  },
});
