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
        type="checkbox"
        :name="`check-${name}`"
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
  name: 'CheckBox',

  props: {
    value: {
      type: Array,
      default: () => [],
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
