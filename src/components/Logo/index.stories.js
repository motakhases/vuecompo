import Logo from './index.vue';
export default {
  component: Logo,
  title: 'Components/Logo',
};

const Template = (_, { argTypes }) => ({
  components: { Logo },
  props: Object.keys(argTypes),
  template: `
  <div class="bg-gray-100 dark:bg-gray-dark-100 p-lg rounded-md flex flex-col gap-md rtl">
    <h1 class="font-bold dark:text-surface"> لوگو </h1>
    <div class="w-[180px] text-center flex items-center bg-surface h-[150px] rounded-md py-xl px-md dark:text-surface dark:bg-surface-dark">
    	<Logo size="medium" type="logo" />
    </div>

		<h1 class="mt-lg font-bold dark:text-surface"> سایزهای مختلف لوگو </h1>
    <div class="flex items-center mt-sm gap-x-sm">
      <div class="w-[180px] text-center flex items-center bg-surface h-[150px] rounded-md py-xl px-md dark:text-surface dark:bg-surface-dark">
    	<Logo size="medium" type="logo" language="fa"/>
      </div>
      <div class="w-[180px] text-center flex items-center bg-surface h-[150px] rounded-md py-xl px-md dark:text-surface dark:bg-surface-dark">
      <Logo size="large" type="logo" language="fa" />
      </div>
    </div>

		<h1 class="mt-lg font-bold dark:text-surface"> انواع لوگو به فارسی </h1>
    <div class="flex mt-sm gap-x-sm">
      <div class="w-[180px] text-center flex items-center bg-surface h-[150px] rounded-md py-xl px-md dark:text-surface dark:bg-surface-dark">
	      <Logo size="medium" type="logo" language="fa" />
      </div>
      <div class="w-[180px] text-center flex items-center bg-surface h-[150px] rounded-md py-xl px-md dark:text-surface dark:bg-surface-dark">
        <Logo size="medium" type="logo-type" language="fa" />
      </div>
      <div class="w-[180px] text-center flex items-center bg-surface h-[150px] rounded-md py-xl px-md dark:text-surface dark:bg-surface-dark">
	      <Logo size="medium" type="logo-mark" language="fa" />
      </div>
    </div>

    <h1 class="mt-lg font-bold dark:text-surface"> انواع لوگو به انگلیسی </h1>
    <div class="flex mt-sm gap-x-sm">
      <div class="w-[180px] text-center flex items-center bg-surface h-[150px] rounded-md py-xl px-md dark:text-surface dark:bg-surface-dark">
	      <Logo size="medium" type="logo" language="en" class="w-[144px]" />
      </div>
      <div class="w-[180px] text-center flex items-center bg-surface h-[150px] rounded-md py-xl px-md dark:text-surface dark:bg-surface-dark">
        <Logo size="medium" type="logo-type" language="en" class="w-[144px]" />
      </div>
      <div class="w-[180px] text-center flex items-center bg-surface h-[150px] rounded-md py-xl px-md dark:text-surface dark:bg-surface-dark">
	      <Logo size="medium" type="logo-mark" language="en" class="w-[144px]" />
      </div>
    </div>
  </div>
  `,
});

export const Default = Template.bind({});

// Default.argTypes = {
//   size: {
//     options: ['medium', 'large'],
//     control: { type: "radio" },
//   },
// 	type: {
//     options: ['logo', 'logo-type', 'logo-mark'],
//     control: { type: "radio" },
//   },
// 	name: {
//     options: ['zarinpal'],
//     control: { type: "radio" },
//   },
// 	language: {
//     options: ['fa', 'en'],
//     control: { type: "radio" },
//   },
// };

// Default.args = {
//   size: 'medium',
// 	type: 'logo',
// 	name: 'zarinpal',
// 	language: 'fa'
// };
