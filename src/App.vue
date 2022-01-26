<template>
  <div
    class="p-2xl"
    dir="rtl"
  >
    <Table
      :data="tableData"
      :columns="columns"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Table from './components/Table/index.vue';

@Component({
  components: {
    Table,
  },
})
export default class App extends Vue {
  tableData = [
    {
      price: {
        type: 'price',
        data: 8100000,
      },
      pay_id: {
        type: 'text',
        data: 2234145522155,
      },
      description: {
        type: 'text',
        data: 'درخواست پرداخت دامنه شماره 2425',
      },
      created_at: {
        type: 'date',
        data: '2020-11-30T11:55:07.000000Z',
      },
      status: {
        type: 'status',
        data: [
          {
            title: 'پرداخت موفق',
            type: 'positive',
            size: '',
          },
        ],
      },
    },
    {
      price: {
        type: 'price',
        data: 8100000,
      },
      pay_id: {
        type: 'text',
        data: 2234145522155,
      },
      description: {
        type: 'text',
        data: 'درخواست پرداخت دامنه شماره 2425',
      },
      created_at: {
        type: 'date',
        data: '2020-11-30T11:55:07.000000Z',
      },
      status: {
        type: 'status',
        data: [
          {
            title: 'پرداخت موفق',
            type: 'positive',
            size: '',
          },
        ],
      },
    },
  ]

  columns = [
    {
      title: 'مبلغ',
      key: 'price',
      label: 'ریال',
    },
    {
      title: 'شناسه پرداخت',
      key: 'pay_id',
    },
    {
      title: 'توضیحات',
      key: 'description',
    },
    {
      title: 'تاریخ و ساعت',
      key: 'created_at',
    },
    {
      title: 'وضعیت',
      key: 'status',
    },
  ]
}
</script>
