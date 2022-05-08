import ProgressBar from './index.vue';

export default {
  component: ProgressBar,
  title: 'Components/ProgressBar',
};

const Template = (_, { argTypes }) => ({
  components: { ProgressBar },
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
      <ProgressBar
        :items="data"
        title="در حال آپلود Filename.png"
        percent="25%"
      >
      </ProgressBar>
    </div>  
  </div>  
  `,
});

export const Default = Template.bind({});
