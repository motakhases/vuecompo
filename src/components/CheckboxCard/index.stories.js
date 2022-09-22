import CheckboxCard from "./index.vue";
import Button from "../Button/index.vue";
import image from "../../assets/images/product_img.png";

export default {
  component: CheckboxCard,
  title: "Components/CheckboxCard",
};

const Template = (_, { argTypes }) => ({
  components: { CheckboxCard, Button },
  data() {
    return {
      image:'gfffdfd',
    };
  },

  props: Object.keys(argTypes),
  template: `
  <div class="p-lg rounded-md flex flex-col gap-md" dir="rtl">
	  <CheckboxCard title="لیبل" description="توضیحات" :image="image">
      <div >محتوای دلخواه در کارت</div>
      <template #actions>
        <Button type="secondary" text="دکمه" />
      </template>
    </CheckboxCard>
    <img :src="image" />
  </div>
  `,
});

export const Default = Template.bind({});
