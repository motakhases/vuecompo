<template>
  <div class="zpl-tabel">
    <table>
      <!-- Head -->
      <thead>
        <tr>
          <Th
            v-for="(col, index) in columns"
            :key="index"
            :title="col.title"
            :label="col.label"
            class="text-xs"
          />
        </tr>
      </thead>

      <!-- Body -->
      <tbody>
        <tr
          v-for="(td, i) in data"
          :key="i"
        >
          <td
            v-for="(col, index) in columns"
            :key="index"
          >
            <template v-if="td[col.key]">
              <!-- Custom -->
              <span v-if="td[col.key].type === 'custom'">
                <strong>{{ td[col.key].data.title }}</strong>
                <small> {{ td[col.key].data.sub }} </small>
              </span>

              <!-- Number -->
              <span v-else-if="td[col.key].type === 'price'">
                {{ td[col.key].data.toLocaleString() }}
              </span>

              <!-- Date -->
              <span v-else-if="td[col.key].type === 'date'">
                {{ td[col.key].data | JdateName }}
              </span>

              <!-- Label -->
              <span v-else-if="td[col.key].type === 'status'">
                <Status
                  v-for="(label, labelIndex) in td[col.key].data"
                  :key="labelIndex"
                  :text="label.title "
                  :type="label.type"
                />
              </span>

              <span v-else-if="td[col.key].type === 'text'">
                {{ td[col.key].data }}
              </span>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class Table extends Mixins(Logic) {}
</script>
