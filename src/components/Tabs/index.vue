<template>
  <div :class="['zpl-tabs' , {'full-tabs':fillContainer }]">
    <div
      v-for="(option, index) in options"
      :key="index"
      :class="['tab', {active:activeTab==index}]"
      @click="changeFilter(index,option.name)"
    >
      <span>
        {{ option.label }}
      </span>
    </div>
  </div>
</template>

<script>

import './style.scss';

export default ({
  name: 'Tabs',
  props: {
    fillContainer: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      required: true,
      // contains : {label , name}
    },
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  methods: {
    changeFilter(index, tab) {
      this.activeTab = index;
      this.$emit('activeTab', tab);
    },
  },
});

</script>
