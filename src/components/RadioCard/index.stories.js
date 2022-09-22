import RadioCard from "./index.vue";
import Button from "../Button/index.vue";
import image from "../../assets/images/product_img.png";

export default {
  component: RadioCard,
  title: "Components/RadioCard",
};

const Template = (_, { argTypes }) => ({
  components: { RadioCard, Button },
  data() {
    return {
      image,
      data: "first",
    };
  },

  props: Object.keys(argTypes),
  template: `
  <div class="p-lg rounded-md flex flex-col gap-md" dir="rtl">
  <div class="w-full flex gap-2xl">
  <div class="flex-[0_0_360px]">
    <RadioCard
      title="لیبل"
      description="توضیحات"
      :image="image"
      v-model="data"
      val="first"
      disabled
    />
  </div>
  <div class="flex-[0_0_360px]">
    <RadioCard
      title="لیبل"
      description="توضیحات"
      :image="image"
      v-model="data"
      val="second"
      disabled
    />
  </div>
  <div class="flex-[0_0_360px]">
    <RadioCard
      title="لیبل"
      description="توضیحات"
      :image="image"
      v-model="data"
      val="third"
    />
  </div>
  <div class="flex-[0_0_360px]">
    <RadioCard
      title="لیبل"
      description="توضیحات"
      :image="image"
      v-model="data"
      val="forth"
    />
  </div>
</div>
  </div>
  `,
});

export const Default = Template.bind({});
