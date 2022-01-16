<template>
  <div class="p-3xl">
    <TextField
      v-model="input"
      label="این عنوان فیلد است"
      type="number"
      placeholder="و این هم یک پلیسهولدر"
    />

    {{ input }}
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import TextField from '@/components/TextField/index.vue';

export default Vue.extend({
  name: 'App',

  components: {
    TextField,
  },

  data() {
    return {
      input: '',
    };
  },
});
</script>
