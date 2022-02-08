import PageHeading from "./index.vue";
import Button from '@/components/Button/index.vue';

const Template = (_, { argTypes }) => ({
  components: { PageHeading, Button },
  props: Object.keys(argTypes),
  template: `
  <div class="rtl bg-background dark:bg-background-dark p-sm">
      <PageHeading
        :return-b-t-n="returnBTN"
        :sticky="sticky"
        title="عنوان"
        desc="توضیحات"
        :has-button="true"
        :statuses="statuses"
      >
        <template v-slot:buttons>
          <Button
            text="تست"
          />
          <Button
            text="تست دو"
          />
        </template>
      </PageHeading>
  </div>  
  `,
});

const pageHeading = Template.bind({});

pageHeading.argTypes = {
};

pageHeading.args = {
  title: "عنوان",
  desc: "توضیحات صفحه",
  sticky: false,
  returnBTN: true,
  statuses: [
    {
      text:'غیر فعال', type:'negative'
    },
    {
      text:'فعال', type:'positive'
    }
  ]

};

export default pageHeading