<template>
  <ul class="zpl-popover">
    <li
      v-for="(item,index) in items"
      :key="index"
      :class="['popover-item', {'negative-item': negative}]"
      @click="select(item.value)"
    >
      <Icon
        v-if="iconName"
        :name="iconName"
        class="zpl-button-icon"
      />
      {{ item.title }}
    </li>
  </ul>
</template>
<script>
import './style.scss';
import Icon from '../Icon/index.vue';

// usage: it should be child of this component => div.absolute
// and width of that is equal to parrent(last comment) div width

export default {
  components: { Icon },
  props: {
    items: {
      type: Array,
      required: true,
    },
    parrentWidth: {
      type: Boolean,
      default: false,
    },
    iconName: {
      type: String,
      default: '',
    },
    negative: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    select(val) {
      this.$emit('select', val);
    },
  },
};
</script>
