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
    // update value of textarea
    onInput(event: any) {
      this.$emit('input', event.target.value);
    },
    // after focusing move the label
    onFocusIn() {
      this.activeLabel = true;
    },
    // if textarea is empty put label inside textarea on focusing out
    onFocusOut() {
      if (!this.value) {
        this.activeLabel = false;
      }
    },
  },
});
