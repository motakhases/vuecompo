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
        "Box",
        "ChatMessage",
        "CreditCheckout",
        "ChevronUp",
        "DrpItemCheck",
        "GridLayout",
        "PaymentCard",
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
        "UserProfileSquare",
        "ProfileFill",
        "QuestionCircle",
        "Notification",
        "ChartSquare",
        "Plus",
        "Terminal",
        "Delete",
        "ClockRefresh",
        "ArrowLeft",
        "ArrowRight",
        "ArrowFirst",
        "ArrowLast",
        "Star",
        "NightModeCircle",
        "NightModeSquare",
        "DotsMenu",
        "UndoneCheck",
        "Product",
        "ExitLogOut",
        "Calendar",
        "BankSignalSquare",
        "CheckMarkCircleOutlined",
        "Copy",
        "CreditCardCheckmark",
        "Discount",
        "DollarFill",
        "ExportArrowTopLeft",
        "Filters",
        "EyeShow",
        "EyeHidden",
        "IndeterminateFill",
        "InvoicePlus",
        "MessageEditFill",
        "PenAddNote",
        "PenEdit",
        "QrCode",
        "Search",
        "SettingsRound",
        "Share",
        "Download",
        "Instagram",
        "Telegram",
        "Whatsapp",
      ],
    };
  },
  template: `
	<div class="bg-gray-100 dark:bg-gray-dark-100 p-lg rounded-md flex flex-wrap rtl gap-x-md gap-y-lg">
		<div v-for="name in names" :key="name" class="w-[18.6%]">
  	  <div class="text-center flex flex-col items-center bg-surface h-[150px] rounded-md py-xl px-md dark:text-surface dark:bg-surface-dark">
				<Icon :name="name" class="w-[24px] h-[24px] mb-sm flex-1" />
				<span> {{ name }} </span>
			</div>	
		</div>
	</div>
  `,
});

export const Default = Template.bind({});
