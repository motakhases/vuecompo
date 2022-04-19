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
          id: 1,
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
              title: "پرداخت ناموفق",
              type: "negative",
            },
          ],
        },
      },
      {
        price: {
          type: "price",
          id: 2,
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
    tableData2: [
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
        maxWidth: "200px"
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
        maxWidth: "200px"

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
        title: "غیرفعال سازی",
        icon: "eyeHidden",
        color: "text-danger",
        action: () => console.log("click"),
        isShow:(x)=>{return x.status.data[0].type === 'positive'},
      },
      {
        title: "فعال سازی",
        icon: "eyeShow",
        color: "",
        action: () => console.log("click"),
        isShow:(x)=>{return x.status.data[0].type === 'negative'},
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
      route-name="session"
      dropdownWidth="320px"
    />

    <h1 class="my-sm font-bold dark:text-surface">
      قابل انتخاب
    </h1>
    <Table
      :data="tableData2"
      :columns="columns"
      selectable
    />
  </div>
  `,
});

export const Default = Template.bind({});
