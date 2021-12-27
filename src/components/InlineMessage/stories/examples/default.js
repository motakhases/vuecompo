import InlineMessage from '../../index.vue';
import Button from '../../../Button/index.vue';

const Template = (_, { argTypes }) => ({
  components: { InlineMessage, Button },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
    <InlineMessage
      type="informative"
      title="سطح کاربری شما به سطح آبی تغییر کرد"
    />
    <h1 class="mt-sm font-bold dark:text-surface">
      همراه با محتوا
    </h1>
    <InlineMessage
      type="positive"
      title="محصول با موفقیت ایجاد شد"
      description="لینک محصول را برای مشتریان خود ارسال نمایید تا به راحتی وارد صفحه ثبت سفارش شوند."
    />
    <h1 class="mt-sm font-bold dark:text-surface">
      انواع مختلف پیام
    </h1>
    <div class="flex flex-col gap-y-md">
      <InlineMessage
        title="Neutral"
        type="neutral"
      />
      <InlineMessage
        title="Informative"
        type="informative"
      />
      <InlineMessage
        title="Warning"
        type="warning"
      />
      <InlineMessage
        title="Negative"
        type="negative"
      />
      <InlineMessage
        title="Positive"
        type="positive"
      />
    </div>
    <h1 class="mt-sm font-bold dark:text-surface">
      همراه با دکمه بستن
    </h1>
    <InlineMessage
      type="negative"
      title="خطا در دریافت خودکار کد رهگیری مالیاتی"
      toggle
      description="شماره موبایلی که در پنل زرین‌پال ثبت کرده‌اید متعلق به کد ملی شما نیست و به همین دلیل امکان دریافت خودکار کد مالیاتی از سمت زرین‌پال وجود ندارد."
    />
    <h1 class="mt-sm font-bold dark:text-surface">
      همراه با دکمه
    </h1>
    <InlineMessage
      toggle
      type="warning"
      title="اطلاعات حساب تکمیل نشده است"
      description="لطفا اطلاعات حساب خود را تکمیل کنید تا از تمام  امکانات زرین پال بهره مند شوید."
    >
      <Button
        type="warning"
        text="تکمیل حساب"
      />
    </InlineMessage>
  </div>
  `,
});

const Default = Template.bind({});

// Default.argTypes = {
//   type: {
//     options: ['neutral', 'informative', 'warning', 'negative', 'positive'],
//     control: { type: 'select' },
//   },
// };

// Default.args = {
//   title: 'عنوان',
//   description: '',
//   type: 'neutral',
//   toggle: false,
// };

export default Default;
