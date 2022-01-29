<template>
  <td>
    <div>
      <template v-if="data">
        <!-- Custom -->
        <span v-if="data.type === 'custom'">
          <strong>{{ data.data.title }}</strong>
          <small> {{ data.data.sub }} </small>
        </span>

        <!-- Number -->
        <span v-else-if="data.type === 'price'">
          {{ data.data.toLocaleString() }}
        </span>

        <!-- Date -->
        <span v-else-if="data.type === 'date'">
          {{ data.data | JdateName }}
        </span>

        <!-- Label -->
        <span v-else-if="data.type === 'status'">
          <Status
            v-for="(label, labelIndex) in data.data"
            :key="labelIndex"
            :text="label.title "
            :type="label.type"
          />
        </span>

        <span v-else-if="data.type === 'text'">
          {{ data.data }}
        </span>
      </template>
    </div>
  </td>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';

@Component
export default class Table extends Mixins(Logic) {}
</script>

