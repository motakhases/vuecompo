import Table from "./index.vue";
import StoryRouter from "storybook-vue-router";

export default {
  component: Table,
  title: "Components/Table",
  decorators: [(storyFn) => StoryRouter()(storyFn)],
};

const Template = (_, { argTypes }) => ({
  components: { Table },
  data: () => ({
    tableData: [
      {
        price: {
          type: "custom",
          data: {
            image: '',
            title: 'سلام',
            sub: 'بر تو'
          },
        },
        pay_id: {
          type: "text",
          data: 2234145522155,
        },
        description: {
          type: "description",
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
          type: "description",
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
        width: "20%",
      },
      {
        title: "شناسه پرداخت",
        key: "pay_id",
        width: "15%",
      },
      {
        title: "توضیحات",
        key: "description",
        width: "35%",
      },
      {
        title: "تاریخ و ساعت",
        key: "created_at",
        sort: true,
        width: "15%",
      },
      {
        title: "وضعیت",
        key: "status",
        width: "15%",
      },
      {
        title: "",
        key: "action",
      },
    ],

    actions: [
      {
        title: "ویرایش",
        icon: "PenEdit",
        color: "",
        action: (x) => {
          console.log("click")
          console.log(x)
        },
      },
      {
        title: "بستن",
        icon: "delete",
        color: "",
        action: () => console.log("click"),
      },
      {
        title: "افزدن",
        icon: "plus",
        color: "",
        action: () => console.log("click"),
      },
    ],
  }),
  template: `
  <div class="dark:bg-background-dark p-sm rounded-md" dir="rtl">
    <Table
      :data="tableData"
      :columns="columns"
      class="mb-xl"
      bordered
      :actions="actions"
      link="/link"
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
