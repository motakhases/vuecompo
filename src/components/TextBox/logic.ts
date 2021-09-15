import Vue from 'vue';

export default Vue.extend({
  name: 'TextBox',
  props: {
    value: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'medium',
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
  computed: {
    rowsNumber() {
      // check the size to choose the correct number for textarea rows
      switch (this.size) {
        case 'small':
          return 2;
        case 'medium':
          return 3;
        case 'large':
          return 4;
        default:
          return 3;
      }
    },
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
