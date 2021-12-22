import Icon from "./index.vue";

export default {
  component: Icon,
  title: "Components/Icon",
};

const Template = (_, { argTypes }) => ({
  components: { Icon },
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
	<div class="bg-gray-100 dark:bg-surface-dark p-lg rounded-md flex flex-wrap rtl gap-x-md gap-y-lg">
		<div v-for="name in names" :key="name" class="p-sm dark:text-surface">
  	  <div class="text-center flex flex-col items-center w-[25%] bg-surface">
				<Icon :name="name" class="w-[24px] h-[24px] mb-sm" />
				<span> {{ name }} </span>
			</div>	
		</div>
	</div>
  `,
});

export const Default = Template.bind({});

