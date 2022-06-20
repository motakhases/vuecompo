import Card from "./index.vue";
import Button from "../Button/index.vue";

export default {
  component: Card,
  title: "Components/Card",
};

const Template = (_, { argTypes }) => ({
  components: { Card, Button },
  data() {
    return {
      show: false,
    };
  },
  
  props: Object.keys(argTypes),
  template: `
  <div class="bg-background dark:bg-background-dark p-lg rounded-md flex flex-col gap-md" dir="rtl">
  {{show}}
  <div @click="()=>this.show = !this.show">show</div>
	  <Card title="عنوان کارت">
      <div v-if="show">محتوای دلخواه در کارت</div>
      <template #actions>
        <Button type="secondary" text="دکمه" />
      </template>
    </Card>
  </div>
  `,
});

export const Default = Template.bind({});
