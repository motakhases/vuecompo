import BankCards from "./index.vue";

export default {
  component: BankCards,
  title: "Components/BankCards",
};

const Template = (_, { argTypes }) => ({
  components: { BankCards },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl">
		<BankCards v-bind="$props" />
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
  username: "شایسته ملک پور",
  bankName: "بانک سامان",
  logo: "saman",
  amount: "5120000",
  iban: "IR870560085577703153460001",
  rrn: "892938820001277640002746",
  defaultAccount: false,
};
