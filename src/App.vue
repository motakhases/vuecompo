<template>
  <div class="p-3xl">
    <TextBox
      v-model="input"
      label="فیلد"
    />

    {{ input }}
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import TextBox from '@/components/TextBox/index.vue';

export default Vue.extend({
  name: 'App',

  components: {
    TextBox,
  },

  data() {
    return {
      input: 'سلام',
    };
  },
});
</script>
