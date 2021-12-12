import Popover from './index.vue';

export default {
  component: Popover,
  title: 'Components/Popover',
};

const Template = (_, { argTypes }) => ({
  components: { Popover },
  props: Object.keys(argTypes),
  template: `
  <div class="p-sm relative rounded-md rtl">
    <div class="w-[250px] absolute rtl">
      <Popover
        :items="items"
        :iconName="iconName"
        :negative="negative"
      >
      </Popover>
    </div>  
  </div>  
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  items: [
    {
      title: 'تست یک',
      value: 1,
    },
    {
      title: 'تست دو',
      value: 1,
    },
    {
      title: 'تست سه',
      value: 1,
    }
  ],
  iconName: '',
  negative: false,
};
