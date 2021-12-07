<template>
  <div class="zpl-modal">
    <div class="modal">
      <div class="modal-header">
        <h1>{{ title }}</h1>
        <Icon
          name="delete"
          @click.native="close"
        />
      </div>
      <div class="modal-body">
        <slot name="body" />
      </div>
      <div class="modal-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
import './style.scss';
import Icon from '../Icon/index.vue';

export default {
  name: 'Modal',
  components: { Icon },
  props: {
    title: {
      type: String,
      default: 'عنوان',
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },

};

</script>
