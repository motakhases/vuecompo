import Table from './index.vue';
import StoryRouter from 'storybook-vue-router';

export default {
  component: Table,
  title: 'Components/Table',
  decorators: [(storyFn) => StoryRouter()(storyFn)],
};

const Template = (_, { argTypes }) => ({
  components: { Table },
  data: () => ({
    tableData: [
      {
        price: {
          type: 'custom',
          id: 'i.id',
          click: () => console.log('click'),
          data: {
            image: '',
            icon: 'terminal',
            title: 'عنوان',
            sub: 'زیرنویس',
            subMono: true,
            titleMono: true,
          },
        },
        pay_id: {
          type: 'text',
          data: 2234145522155,
          mono: true,
        },
        description: {
          type: 'description',
          data: 'درخواست پرداخت دامنه شماره 2425',
          mono: true,
        },
        created_at: {
          type: 'date',
          data: '2020-11-30T11:55:07.000000Z',
        },
        status: {
          type: 'label',
          data: [
            {
              text: 'پرداخت ناموفق',
              type: 'negative',
            },
            {
              text: 'پرداخت موفق',
              type: 'neutral',
            },
          ],
        },
      },
      {
        price: {
          type: 'custom',
          id: 'i.id',
          data: {
            avatarImage: 'https://faces-img.xcdn.link/image-lorem-face-6511.jpg',
            title: 'i.title',
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
              size: '',
            },
          ],
        },
      },
    ],
    tableData2: [
      {
        price: {
          type: 'custom',
          data: {
            pspLogo: 'Asan',
            title: 'سلام',
            sub: 'بر تو',
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
          type: 'label',
          data: [
            {
              title: 'پرداخت موفق',
              type: 'negative',
            },
          ],
        },
      },
    ],

    columns: [
      {
        title: 'مبلغ',
        key: 'price',
        width: '20%',
        maxWidth: '200px',
        minWidth: '200px',
      },
      {
        title: 'شناسه پرداخت',
        key: 'pay_id',
        width: '15%',
        minWidth: '150px',
      },
      {
        title: 'توضیحات',
        key: 'description',
        width: '35%',
        maxWidth: '200px',
        minWidth: '200px',
      },
      {
        title: 'تاریخ و ساعت',
        key: 'created_at',
        sort: true,
        width: '15%',
        minWidth: '250px',
      },
      {
        title: 'وضعیت',
        key: 'status',
        width: '15%',
        minWidth: '150px',
      },
    ],

    actions: [
      {
        title: 'ویرایش',
        icon: 'PenEdit',
        color: '',
        action: (x) => {
          console.log('click');
          console.log(x);
        },
        isShow: () => true,
      },
    ],
    act: [
      {
        title: 'ویرایش',
        icon: 'PenEdit',
        color: 'text-danger',
        action: (x) => {
          console.log('click');
          console.log(x);
        },
        isShow: () => true,
      },
      {
        title: 'ویرایش',
        icon: '',
        color: '',
        action: (x) => {
          console.log('click');
          console.log(x);
        },
        isShow: () => true,
      },
    ],
    actions2: [
      {
        icon: 'CircleDelete',
        color: 'text-danger',
        action: (x) => {
          console.log(x);
        },
        isShow: () => true,
      },
    ],
  }),
  template: `
  <div class="dark:bg-background-dark p-sm rounded-md" dir="rtl">
    <Table
    :data="tableData2"
    :columns="columns"

hasCustom
:actions="actions"

    />

    <Table
      :data="tableData"
      :columns="columns"
      class="mb-xl"
      bordered
      :actions="act"
      route-name="session"
      dropdownWidth="320px"
      hasCustom
      hasSubCustom
      :hasImage="false"

    />

    <Table
      :data="tableData"
      :columns="columns"
      class="mb-xl"
      bordered
      route-name="session"
      dropdownWidth="320px"
      hasCustom
      hasSubCustom
      hasImage
      :actions="actions2"
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
