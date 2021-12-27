import Popover from './index.vue';

// export default {
//   component: Popover,
//   title: 'Components/Popover',
// };

const Template = (_, { argTypes }) => ({
  components: { Popover },
  props: Object.keys(argTypes),
  data: () => ({
    data: [
      {
        title: 'گزینه اول',
        value: 1,
      },
      {
        title: 'گزینه دوم',
        value: 1,
      },
      {
        title: 'گزینه سوم',
        value: 1,
      },
      {
        title: 'گزینه چهارم',
        value: 1,
      },
      {
        title: 'گزینه پنجم',
        value: 1,
      },
      {
        title: 'گزینه ششم',
        value: 1,
      }
    ],
  }),
  template: `
  <div class="p-sm relative rounded-md rtl h-[300px]">
    <div class="w-[250px] absolute rtl">
      <Popover
        :items="data"
      >
      </Popover>
    </div>  
  </div>  
  `,
});

export const Default = Template.bind({});
