<template>
  <div class="p-3xl">
    <DataSheet>
      <DSRow :cols="4">
        <DSItem
          title="first"
          class="col-span-4 md:col-span-2 lg:col-span-1"
        >
          <!-- Content or Component -->
        </DSItem>
        <DSItem
          title="first"
          class="col-span-4 md:col-span-2 lg:col-span-1"
        >
          <!-- Content or Component -->
        </DSItem>
      </DSRow>
      <DSRow :cols="4">
        <DSItem
          title="first"
          class="col-span-4 md:col-span-2 lg:col-span-1"
        >
          <!-- Content or Component -->
        </DSItem>
        <DSItem
          title="first"
          class="col-span-4 md:col-span-2 lg:col-span-1"
        >
          <!-- Content or Component -->
        </DSItem>
        <DSItem
          title="first"
          class="col-span-4 md:col-span-2 lg:col-span-1"
        >
          <!-- Content or Component -->
        </DSItem>
      </DSRow>
    </DataSheet>
  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data() {
    return {
      datashet: [
        {
          title: 'first', // string only
          content: '', // string or component
          size: 1, // 1 up to 4
        },
        {
          title: 'second',
          content: '',
          size: 1,
        },
      ],
    };
  },
});
</script>
