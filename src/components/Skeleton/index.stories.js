import Skeleton from './index.vue';

export default {
  component: Skeleton,
  title: 'Components/Skeleton',
};
const Template = (_, { argTypes }) => ({
  components: {
    Skeleton,
  },
  props: Object.keys(argTypes),
  data: () => ({
    sm: 'سلام از طرف یک فیلد غیر فعال',
    md: '',
    lg: '',
  }),
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
	  <Skeleton type="body" />
		<h1 class="mt-sm font-bold dark:text-surface">  عنوان </h1>
	  <Skeleton type="heading" />
		<h1 class="mt-sm font-bold dark:text-surface"> انواع لودینگ </h1>
		<div class="flex gap-sm">
		  <Skeleton type="thumbnail" />
		  <Skeleton type="avatar" />
	    <Skeleton type="iconButton" />
	    <Skeleton type="iconCircle" />
	    <Skeleton type="iconSquare" />
      <Skeleton type="toggle" />
      <Skeleton type="button" />

		</div>
  </div>
  `,
});

export const Default = Template.bind({});
