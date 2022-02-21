import Table from "./index.vue";

export default {
  component: Table,
  title: "Components/Table",
};

const Template = (_, { argTypes }) => ({
  components: { Table },
  data: () => ({
    tableData: [
      {
        price: {
          type: "price",
          data: 8100000,
          click: () => {
            console.log("clik");
          },
        },
        pay_id: {
          type: "text",
          data: 2234145522155,
        },
        description: {
          type: "text",
          data: "درخواست پرداخت دامنه شماره 2425",
        },
        created_at: {
          type: "date",
          data: "2020-11-30T11:55:07.000000Z",
        },
        status: {
          type: "status",
          data: [
            {
              title: "پرداخت موفق",
              type: "positive",
            },
            {
              icon: "CheckmarkCircle",
              type: "positive",
            },
          ],
        },
      },
      {
        price: {
          type: "price",
          data: 8100000,
        },
        pay_id: {
          type: "text",
          data: 2234145522155,
        },
        description: {
          type: "text",
          data: "درخواست پرداخت دامنه شماره 2425",
        },
        created_at: {
          type: "date",
          data: "2020-11-30T11:55:07.000000Z",
        },
        status: {
          type: "status",
          data: [
            {
              title: "پرداخت موفق",
              type: "positive",
              size: "",
            },
          ],
        },
      },
    ],

    columns: [
      {
        title: "مبلغ",
        key: "price",
        width: "240px",
      },
      {
        title: "شناسه پرداخت",
        key: "pay_id",
        width: "240px",
      },
      {
        title: "توضیحات",
        key: "description",
        width: "240px",
      },
      {
        title: "تاریخ و ساعت",
        key: "created_at",
        sort: true,
        width: "240px",
      },
      {
        title: "وضعیت",
        key: "status",
        width: "240px",
      },
    ],
  }),
  template: `
  <div class="dark:bg-background-dark p-sm rounded-md" dir="rtl">
    <Table
      :data="tableData"
      :columns="columns"
      class="mb-xl"
      :bordered="true"
    />

    <h1 class="my-sm font-bold dark:text-surface">
      قابل انتخاب
    </h1>
    <Table
      :data="tableData"
      :columns="columns"
      selectable
    />
  </div>
  `,
});

export const Default = Template.bind({});
