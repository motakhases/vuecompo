<template>
  <div>
    <label
      v-for="(option,index) in options"
      :key="index"
      :class="['zpl-checkbox']"
    >
      {{ option.label }}
      <input
        v-model="model"
        :value="option.value"
        type="checkbox"
      >
      <span class="checkmark" />
    </label>
  </div>
</template>

<script>

import './style.scss';

export default ({
  name: 'CheckBox',

  props: {
    value: {
      type: [String, Boolean, Number],
      default: null,
    },
    options: {
      type: Array,
      required: true,
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
