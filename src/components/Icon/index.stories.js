import Icon from "./index.vue";

export default {
  component: Icon,
  title: "Components/Icon",
};

const Template = (_, { argTypes }) => ({
  components: { Icon },
  props: Object.keys(argTypes),
  data() {
    return {
      names: [
        "ChevronUp",
        "AngleDown",
        "AngleRight",
        "AngleLeft",
        "CheckmarkCircle",
        "FilledArrowDown",
        "FilledArrowUp",
        "TickLarge",
        "TickSmall",
        "Warning",
        "MenuBurger",
        "Profile",
        "ProfileFill",
        "QuestionCircle",
        "Notification",
        "ChartSquare",
        "Plus",
        "Terminal",
        "Delete",
        "ClockRefresh",
        "ArrowRight",
        "ArrowFirst",
        "ArrowLast",
        "Star",
        "DotsMenu",
        "UndoneCheck",
      ],
    };
  },
  template: `
	<div class="dark:bg-surface-dark p-lg rounded-md flex flex-wrap gap-xl rtl">
		<div v-for="name in names" class="text-center flex flex-col items-center dark:text-surface">
  	  <Icon :name="name" class="w-[24px] h-[24px] mb-sm" />
			<span> {{ name }} </span>
		</div>
		</div>
  `,
});

export const Default = Template.bind({});

