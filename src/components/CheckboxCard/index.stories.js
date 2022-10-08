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
      image,
      check: ['first'],
    };
  },

  props: Object.keys(argTypes),
  template: `
  <div class="p-lg rounded-md flex flex-col gap-md" dir="rtl">
  <div class="w-full flex gap-2xl mt-2xl">
  <div class="flex-[0_0_360px]">
    <CheckboxCard
      title="لیبل"
      description="توضیحات"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqutFS4N1iAqUH3HDW0lc32pnwoHeK_iq_Jw&usqp=CAU"
      v-model="check"
      val="first"
      disabled
    />
  </div>
  <div class="flex-[0_0_360px]">
    <CheckboxCard
      title="لیبل"
      description="توضیحات"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqutFS4N1iAqUH3HDW0lc32pnwoHeK_iq_Jw&usqp=CAU"
      v-model="check"
      val="second"
      disabled
    />
  </div>
  <div class="flex-[0_0_360px]">
    <CheckboxCard
      title="لیبل"
      description="توضیحات"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqutFS4N1iAqUH3HDW0lc32pnwoHeK_iq_Jw&usqp=CAU"
      v-model="check"
      val="third"
    />
  </div>
  <div class="flex-[0_0_360px]">
    <CheckboxCard
      title="لیبل"
      description="توضیحات"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqutFS4N1iAqUH3HDW0lc32pnwoHeK_iq_Jw&usqp=CAU"
      v-model="check"
      val="forth"
    />
  </div>
</div>
  </div>
  `,
});

export const Default = Template.bind({});
