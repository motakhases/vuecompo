<template>
  <div dir="rtl" class="bg-background p-2xl">
    <Table
      :data="tableData"
      :columns="columns"
      class="mb-xl"
      :bordered="true"
    />
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import moment from 'moment-jalaali';

// Components
import Button from '@/components/Button/index.vue';
import TopBar from '@/components/TopBar/index.vue';
import PageHeading from '@/components/PageHeading/index.vue';
import NavigationBar from '@/components/NavigationBar/index.vue';
import NotificationCenter from '@/components/NotificationCenter/index.vue';
import Table from '@/components/Table/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Table,
  },
  data: () => ({
    tableData: [
      {
        price: {
          type: 'price',
          data: 8100000,
          click: () => {
            console.log('clik');
          },
        },
        pay_id: {
          type: 'text',
          data: 2234145522155,
        },
        description: {
          type: 'description',
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
            },
            {
              icon: 'CheckmarkCircle',
              type: 'positive',
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
          type: 'description',
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
    ],

    columns: [
      {
        title: 'مبلغ',
        key: 'price',
        width: '15%',

      },
      {
        title: 'شناسه پرداخت',
        key: 'pay_id',
        width: '25%',

      },
      {
        title: 'توضیحات',
        key: 'description',
        width: '25%',

      },
      {
        title: 'تاریخ و ساعت',
        key: 'created_at',
        width: '20%',

        sort: true,
      },
      {
        title: 'وضعیت',
        key: 'status',
        width: '15%',

      },
    ],
  }),
  methods: {
    displayNotifications() {
      console.log('a');
    },
  },
});
</script>
