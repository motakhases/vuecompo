<template>
  <div>
    <label
      v-for="(option,index) in options"
      :key="index"
      :class="['zpl-radio']"
    >
      {{ option.label }}
      <input
        v-model="model"
        type="radio"
        :name="`radio-${name}`"
        :value="option.value"
        :disabled="disabled"
      >
      <span class="checkmark" />
    </label>
  </div>
</template>

<script>

import './style.scss';

export default ({
  name: 'Radio',

  props: {
    value: {
      type: [String, Boolean, Number],
      default: null,
    },
    options: {
      // contains label & value
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
        return value;
      },
    },
  },

});

</script>
