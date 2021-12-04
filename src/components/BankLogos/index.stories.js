import BankLogos from "./index.vue";

export default {
  component: BankLogos,
  title: "Components/BankLogos",
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BankLogos },
  template: `
	<div class="dark:bg-surface-dark p-sm rounded-md h-3xl rtl">
		<BankLogos v-bind="$props" />
	</div>
	`,
});
export const Default = Template.bind({});

Default.argTypes = {
  logo: {
    options: [
      "saman",
      "pasargad",
      "ayandeh",
      "refah",
      "dey",
      "hekmat",
      "agriculture",
      "melal",
      "tosetavon",
      "sanatmadan",
      "khavarmiane",
      "mellat",
      "eghtesadnovin",
      "melli",
      "parsian",
      "kosar",
      "sepah",
      "cbi",
      "iranzamin",
      "mehr",
      "tourismbank",
      "zarincard",
      "karafarin",
      "postbank",
      "sina",
      "citybank",
      "ansar",
      "tejarat",
      "sarmayeh",
      "saderat",
      "ghavamin",
      "maskan",
      "resalat",
      "noor",
      "toseetebari",
      "tosesaderat",
    ],
    control: { type: "select" },
  },
};

Default.args = {
  logo: "saman",
};
