import ButtonGroup from './index.vue';
import Button from '../Button/index.vue';

export default {
  component: ButtonGroup,
  title: 'Components/ButtonGroup',
};

const Template = (_, { argTypes }) => ({
  components: {
    ButtonGroup,
    Button,
  },
  props: Object.keys(argTypes),
  template: `
    <div class="dark:bg-surface-dark p-sm rounded-md">
      <ButtonGroup>
        <Button type="primary" :text="firstBtn" />
        <Button type="secondary" :text="secondBtn" />
      </ButtonGroup>
    </div>
  `,
});

export const Default = Template.bind({});


Default.args = {
  firstBtn: "دکمه",
  secondBtn: "دکمه",
};