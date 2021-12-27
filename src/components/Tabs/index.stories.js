import Tabs from "./index.vue";
import Tab from "./Tab/index.vue";

export default {
  component: Tabs,
  title: "Components/Tabs",
};

const Template = (_, { argTypes }) => ({
  components: { Tabs, Tab },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md" dir="rtl">
    <Tabs>
      <tab title="پیشخوان">
        <div class="text-text-disabled py-sm">
        <span class="text-text">پیشخوان</span> متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </div>
      </tab>
      <tab title="تراکنش‌ها" warn>
        <div class="text-text-disabled py-sm">
        <span class="text-text">تراکنش‌ها</span> متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </div>
      </tab>
      <tab title="تسویه حساب‌ها">
        <div class="text-text-disabled py-sm">
        <span class="text-text">تسویه حساب‌ها</span> متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </div>
      </tab>
    </Tabs>

    <h1 class="mt-3xl mb-md font-bold dark:text-surface"> 
      حالت تمام عرض
    </h1>
    <Tabs fill-container>
      <tab title="پیشخوان">
        <div class="text-text-disabled py-sm">
        <span class="text-text">پیشخوان</span> متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </div>
      </tab>
      <tab title="تراکنش‌ها" warn>
        <div class="text-text-disabled py-sm">
        <span class="text-text">تراکنش‌ها</span> متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </div>
      </tab>
      <tab title="تسویه حساب‌ها">
        <div class="text-text-disabled py-sm">
        <span class="text-text">تسویه حساب‌ها</span> متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </div>
      </tab>
    </Tabs>

  </div>
  `,
});

export const Default = Template.bind({});
