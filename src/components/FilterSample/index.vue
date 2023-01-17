<template>
  <div dir="rtl">
    <p v-if="limitation">
      {{ text | strLimit(25, false) }}
    </p>
    <p v-if="numberFormat">
      {{ number | numberFormat }}
    </p>
    <div v-if="customDate">
      <p>
        {{ yesterday }}
        <br />
        {{ yesterday | cJalaali }}
      </p>
      <p>--------------------------------------------------</p>
      <p>
        {{ time }}
        <br />
        {{ time | cJalaali }}
      </p>
      <p>--------------------------------------------------</p>
      <p>
        {{ tomarrow }}
        <br />
        {{ tomarrow | cJalaali }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';

export default Vue.extend({ mixins: [logic] });
</script>
