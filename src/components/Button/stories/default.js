import VueI18n from 'vue-i18n';
import Button from '../index.vue';

const Template = (_, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
    <Button size="large" text="دکمه" type="primary"  />
    <h1 class="mt-sm font-bold dark:text-surface"> دکمه تمام عرض </h1>
    <Button size="large" text="دکمه" type="primary" fill  />
    <h1 class="mt-sm font-bold dark:text-surface"> دکمه با آیکن </h1>
    <div class="flex gap-sm">
      <Button type="secondary" text="دکمه" beforeIcon="QuestionCircle" />
      <Button type="secondary" text="دکمه" afterIcon="QuestionCircle" />
      <Button type="secondary" text="دکمه" beforeIcon="QuestionCircle" afterIcon="QuestionCircle" />
      <Button type="secondary" icon="QuestionCircle" />
    </div>
    <h1 class="mt-sm font-bold dark:text-surface"> دکمه در حالت لودینگ </h1>
    <Button size="large" type="primary" loading  />
    <h1 class="mt-sm font-bold dark:text-surface"> انواع سایز دکمه </h1>
    <div class="">
      <Button type="primary" size="small" text="کوچیک" />
      <Button type="primary" size="medium" text="متوسط" />
      <Button type="primary" size="large" text="بزرگ" />
    </div>
    <h1 class="mt-sm font-bold dark:text-surface"> انواع دکمه outline </h1>
    <div class="flex gap-sm">
      <Button type="neutral" text="Neutral" />
      <Button type="informative" text="Informative" />
      <Button type="warning" text="Warning" />
      <Button type="negative" text="Negative" />
      <Button type="positive" text="Positive" />
    </div>
    <h1 class="mt-sm font-bold dark:text-surface"> انواع دکمه </h1>
    <div class="flex gap-sm">
      <Button type="primary" text="Primary" />
      <Button type="secondary" text="Secondary" />
      <Button type="tertiary" text="Tertiary" />
      <Button type="decretive" text="Decretive" />
    </div>

  </div>
  `,
  i18n: new VueI18n({}),
});

const Default = Template.bind({});

// Default.argTypes = {
//   size: {
//     options: ['small', 'medium', 'large'],
//     control: { type: 'select' },
//   },
//   type: {
//     options: [
//       'primary',
//       'secondary',
//       'tertiary',
//       'decretive',
//       'neutral',
//       'informative',
//       'warning',
//       'negative',
//       'positive',
//     ],
//     control: { type: 'select' },
//   },
// };

// Default.args = {
//   text: 'دکمه',
//   size: 'large',
//   type: 'primary',
//   disabled: false,
//   fill: false,
//   loading: false,
//   afterIcon: '',
//   beforeIcon: '',
//   icon: '',
// };

export default Default;
