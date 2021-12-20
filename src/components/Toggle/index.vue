<template>
  <div>
    <label
      :class="['zpl-toggle']"
    >
      <input
        v-model="model"
        type="checkbox"
        :disabled="disabled"
      >
      <span class="slider" />
    </label>
  </div>
</template>

<script>

import './style.scss';

export default ({
  name: 'Toggle',

  props: {
    value: {
      type: Boolean,
      default: false,
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
      },
    },
  },

});

</script>
