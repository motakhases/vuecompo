import Vue from 'vue';

export default Vue.extend({
  name: 'Radio',

  props: {
    val: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    model: {
      get():string {
        return this.value;
      },
      set(value:string[]):void {
        this.$emit('input', value);
      },
    },
  },
});
