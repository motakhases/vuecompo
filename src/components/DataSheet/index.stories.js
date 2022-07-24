import DataSheet from "./index.vue";
import DataSheetRow from './Row/index.vue';
import DataSheetItem from './Item/index.vue';

export default {
  component: DataSheet,
  title: "Components/DataSheet",
};

const Template = (_, { argTypes }) => ({
  components: { DataSheet, DataSheetRow, DataSheetItem },
  props: Object.keys(argTypes),
  data: () => ({
    obj: {
      empty: ''
    }
  }),
  template: `
  <div class="dark:bg-background-dark p-lg rounded-md flex flex-col gap-md" dir="rtl">
    <DataSheet class="mb-xl" loading :loadingNumber="5">
      <DataSheetRow>
        <DataSheetItem title="مجموع تراکنش‌ها" leftAlign>
          260,000
          ریال
        </DataSheetItem>
      </DataSheetRow>
    </DataSheet>

    <DataSheet class="mb-xl" loading>
      <DataSheetRow>
        <DataSheetItem
          title="مجموع تراکنش‌ها"
          
        >
          260,000
          ریال
        </DataSheetItem>
        <DataSheetItem
          title="مجموع کارمزد تراکنش‌ها"
        >
          8,000
          ریال
        </DataSheetItem>
        <DataSheetItem
          title="مبلغ خالص تسویه"
        >
          242,000
          ریال
        </DataSheetItem>
        <DataSheetItem
          title="مبلغ خالص تسویه"
        >
          242,000
          ریال
        </DataSheetItem>
        <DataSheetItem
          title="مجموع تراکنش‌ها"
        >
          260,000
          ریال
        </DataSheetItem>
        <DataSheetItem
        leftAlign
          title="مجموع کارمزد تراکنش‌ها"
        >
          77,000
          ریال
        </DataSheetItem>
      </DataSheetRow>
    </DataSheet>
    <DataSheet class="mb-xl">
    <DataSheetRow>
      <DataSheetItem
        title="مجموع تراکنش‌ها"
        
      >
        260,000
        ریال
      </DataSheetItem>
      <DataSheetItem
        title="مجموع کارمزد تراکنش‌ها"
      >
        8,000
        ریال
      </DataSheetItem>
      <DataSheetItem
        title="مبلغ خالص تسویه"
      >
        242,000
        ریال
      </DataSheetItem>
      <DataSheetItem
        title="مبلغ خالص تسویه"
      >
        242,000
        ریال
      </DataSheetItem>
      <DataSheetItem
        title="مجموع تراکنش‌ها"
      >
        260,000
        ریال
      </DataSheetItem>
      <DataSheetItem
      leftAlign
        title="مجموع کارمزد تراکنش‌ها"
      >
        77,000
        ریال
      </DataSheetItem>
    </DataSheetRow>
  </DataSheet>
    <DataSheet>
      <DataSheetRow>
        <DataSheetItem
          row
          leftAlign
          title="مجموع تراکنش‌ها"
        >
          260,000
          ریال
        </DataSheetItem>
        <DataSheetItem
          row
          title="مجموع کارمزد تراکنش‌ها"
        >
          8,000
          ریال
        </DataSheetItem>
      </DataSheetRow>
    </DataSheet>
    <DataSheet loading row>
    <DataSheetRow>
      <DataSheetItem
        row
        leftAlign
        title="مجموع تراکنش‌ها"
      >
        260,000
        ریال
      </DataSheetItem>
      <DataSheetItem
        row
        title="مجموع کارمزد تراکنش‌ها"
      >
        8,000
        ریال
      </DataSheetItem>
    </DataSheetRow>
  </DataSheet>
  </div>
  `,
});

export const Default = Template.bind({});
