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
          id: "i.id",
          data: {
            image: "",
            title: "عنوان",
            sub:"زیرنویس"
          },
        },
        pay_id: {
          type: "text",
          data: 2234145522155,
          leftAlign: true,
        },
        description: {
          type: "description",
          data: "درخواست پرداخت دامنه شماره 2425",
        },
        created_at: {
          type: "date",
          data: "2020-11-30T11:55:07.000000Z",
          leftAlign: true,
        },
        status: {
          type: "status",
          data: [
            {
              text: "پرداخت ناموفق",
              type: "negative",
            },
          ],
        },
      },
      {
        price: {
          type: "custom",
          id: "i.id",
          data: {
            image: "",
            title: "i.title",
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
            image: "",
            title: "سلام",
            sub: "بر تو",
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
        maxWidth: "200px",
        minWidth: "200px",
      },
      {
        title: "شناسه پرداخت",
        key: "pay_id",
        width: "15%",
        minWidth: "150px",
      },
      {
        title: "توضیحات",
        key: "description",
        width: "35%",
        maxWidth: "200px",
        minWidth: "200px",
      },
      {
        title: "تاریخ و ساعت",
        key: "created_at",
        sort: true,
        width: "15%",
        minWidth: "250px",
      },
      {
        title: "وضعیت",
        key: "status",
        width: "15%",
        minWidth: "150px",
      },
    ],

    actions: [
      {
        title: "ویرایش",
        icon: "PenEdit",
        color: "",
        action: (x) => {
          console.log("click");
          console.log(x);
        },
        isShow: (x) => {
          return x.id === 'mne'
        },
      },
    ],
  }),
  template: `
  <div class="dark:bg-background-dark p-sm rounded-md" dir="rtl">
    <Table


      :columns="columns"
      :data="tableData"
      :actions="actions"
      route-name="panel-terminal-product-id___fa"
      :empty-title="$t('empty.product.title')"
      :empty-caption="$t('empty.product.caption')"
      dropdown-width="200px"
      has-custom
    />

    <Table
      :data="tableData"
      :columns="columns"
      class="mb-xl"
      bordered
      :actions="actions"
      route-name="session"
      dropdownWidth="320px"
      
    />

    <Table
      :data="tableData"
      :columns="columns"
      class="mb-xl"
      bordered
      route-name="session"
      dropdownWidth="320px"
      loading
      hasCustom
      hasSubCustom
      :actions="actions"
    />

    <h1 class="my-sm font-bold dark:text-surface">
      قابل انتخاب
    </h1>
    <Table
      :data="[]"
      :columns="columns"
      selectable
      hasCustom
      :inCard="true"
    />
    <h1 class="my-sm font-bold dark:text-surface">
    قابل انتخاب
  </h1>
    <Table
    :data="tableData2"
    :columns="columns"
    selectable
    loading
    
  />
  </div>
  `,
});

export const Default = Template.bind({});
