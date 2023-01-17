import SegmentedButton from './index.vue';

const Template = (_, { argTypes }) => ({
  components: {
    SegmentedButton,
  },
  props: Object.keys(argTypes),
  data() {
    return {
      list: [
        {
          id: 1,
          text: 'بانک ملی',
          click: () => console.log('clicked'),
          active: true,
        },
        {
          id: 2,
          text: 'بانک سامان',
          click: () => console.log('clicked'),
          active: false,
        },
        {
          id: 3,
          text: 'بانک پاسارگاد',
          click: () => console.log('clicked'),
          active: false,
        },
      ],
    };
  },
  template: `
	<div class="dark:bg-surface-dark p-lg rounded-md rtl">
		<SegmentedButton :items="list" />
    <div class="w-[200px]">    <SegmentedButton :items="list" loading />
</div>

    <h1 class="mt-md mb-sm font-bold dark:text-surface"> حالت تمام عرض </h1>
		<SegmentedButton :items="list" fill />
		<SegmentedButton loading :items="list" fill />

	</div>
  `,
});

const segmentedButton = Template.bind({});

segmentedButton.args = {
  fill: false,
  items: [
    {
      id: 1,
      text: 'بانک ملی',
      click: () => console.log('clicked'),
      active: true,
    },
    {
      id: 2,
      text: 'بانک سامان',
      click: () => console.log('clicked'),
      active: false,
    },
    {
      id: 3,
      text: 'بانک پاسارگاد',
      click: () => console.log('clicked'),
      active: false,
    },
  ],
};

export default segmentedButton;
