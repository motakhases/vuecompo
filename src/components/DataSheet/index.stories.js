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
  template: `
  <div class="dark:bg-background-dark p-lg rounded-md flex flex-col gap-md" dir="rtl">
    <DataSheet class="mb-xl">
      <DataSheetRow>
        <DataSheetItem title="مجموع تراکنش‌ها">
          260,000
          ریال
        </DataSheetItem>
      </DataSheetRow>
    </DataSheet>

    <DataSheet>
      <DataSheetRow :cols="{ xs:1, md:4, lg:4 }">
        <DataSheetItem
          title="مجموع تراکنش‌ها"
          :col-span="{ xs:1, md:2, lg:1 }"
        >
          260,000
          ریال
        </DataSheetItem>
        <DataSheetItem
          title="مجموع کارمزد تراکنش‌ها"
          :col-span="{ xs:1, md:2, lg:1 }"
        >
          8,000
          ریال
        </DataSheetItem>
        <DataSheetItem
          title="مبلغ خالص تسویه"
          :col-span="{ xs:1, md:2, lg:1 }"
        >
          242,000
          ریال
        </DataSheetItem>
        <DataSheetItem
          title="مبلغ خالص تسویه"
          :col-span="{ xs:1, md:2, lg:1 }"
        >
          242,000
          ریال
        </DataSheetItem>
      </DataSheetRow>

      <DataSheetRow :cols="{ xs:1, md:2 }">
        <DataSheetItem
          title="مجموع تراکنش‌ها"
          :col-span="{ xs:2, md:1, lg:1 }"
        >
          260,000
          ریال
        </DataSheetItem>
        <DataSheetItem
          title="مجموع کارمزد تراکنش‌ها"
          :col-span="{ xs:2, md:1, lg:1 }"
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
