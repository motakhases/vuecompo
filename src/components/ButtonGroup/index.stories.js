import ButtonGroup from './index.vue';
import Button from '@/components/Button/index.vue';

export default {
  component: ButtonGroup,
  title: 'Components/Button',
};

const Template = (_, { argTypes }) => ({
  components: {
    ButtonGroup,
    Button,
  },
  props: Object.keys(argTypes),
  template: `
    <div class="dark:bg-surface-dark p-sm rounded-md rtl">
      <ButtonGroup>
        <Button type="primary" :text="firstBtn" />
        <Button type="secondary" :text="secondBtn" />
      </ButtonGroup>
    </div>
  `,
});

export const ButtonGroup = Template.bind({});


ButtonGroup.args = {
  firstBtn: "دکمه",
  secondBtn: "دکمه",
};