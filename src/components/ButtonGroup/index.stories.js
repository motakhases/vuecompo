import ButtonGroup from './index.vue';
import Button from '@/components/Button/index.vue';

const Template = (_, { argTypes }) => ({
  components: {
    ButtonGroup,
    Button,
  },
  props: Object.keys(argTypes),
  template: `
    <div class="dark:bg-surface-dark p-sm rounded-md rtl">
      <ButtonGroup>
        <Button type="primary" text="دکمه" />
        <Button type="secondary" text="دکمه" />
      </ButtonGroup>
    </div>
  `,
});

const group = Template.bind({});

export default group;
