import Card from "./index.vue";
import Button from "../Button/index.vue";

export default {
  component: Card,
  title: "Components/Card",
};

const Template = (_, { argTypes }) => ({
  components: { Card, Button },
  props: Object.keys(argTypes),
  template: `
  <div class="bg-background dark:bg-background-dark p-lg rounded-md flex flex-col gap-md" dir="rtl">
	  <Card title="عنوان کارت">
      محتوای دلخواه در کارت

      <template #actions>
        <Button type="secondary" text="دکمه" />
      </template>
    </Card>
  </div>
  `,
});

export const card = Template.bind({});
