import BankLogos from "./index.vue";

export default {
  component: BankLogos,
  title: "Components/BankLogos",
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BankLogos },
  data() {
    return {
      logos: [
        "saman",
        "pasargad",
        "ayandeh",
        "refah",
        "dey",
        "hekmat",
        "keshavarzi",
        "melall",
        "toseeTaavon",
        "sanatMadan",
        "khavarMianeh",
        "mellat",
        "eghtesadNovin",
        "melli",
        "parsian",
        "kosar",
        "sepah",
        "iranZamin",
        "gardeshgari",
        "zarinCard",
        "karafarin",
        "postbank",
        "sina",
        "shahr",
        "ansar",
        "tejarat",
        "sarmayeh",
        "saderat",
        "ghavamin",
        "maskan",
        "resalat",
        "noor",
        "toseeSaderat",
        "caspian",
        "futurebank",
        "iranEurope",
        "iranVenezuela",
        "mehrEghtesad",
        "mehrIran",
        "standardChartered",
        "taavonEslami",
        "tosee",
        "bankMarkazi",
      ],
    };
  },
  template: `
	<div class="dark:bg-surface-dark p-lg rounded-md rtl flex flex-wrap gap-lg">
		<div class="flex flex-col items-center" v-for="logo in logos" :key="logo">
			<BankLogos :logo="logo" />
			<span> {{ logo }} </span>
		</div>
	</div>
	`,
});
export const Default = Template.bind({});

// Default.argTypes = {
//   logo: {
//     options: [
//       "saman",
//       "pasargad",
//       "ayandeh",
//       "refah",
//       "dey",
//       "hekmat",
//       "keshavarzi",
//       "melall",
//       "toseeTaavon",
//       "sanatMadan",
//       "khavarMianeh",
//       "mellat",
//       "eghtesadNovin",
//       "melli",
//       "parsian",
//       "kosar",
//       "sepah",
//       "iranZamin",
//       "gardeshgari",
//       "zarinCard",
//       "karafarin",
//       "postbank",
//       "sina",
//       "shahr",
//       "ansar",
//       "tejarat",
//       "sarmayeh",
//       "saderat",
//       "ghavamin",
//       "maskan",
//       "resalat",
//       "noor",
//       "toseeSaderat",
//       "caspian",
//       "futurebank",
//       "iranEurope",
//       "iranVenezuela",
//       "mehrEghtesad",
//       "mehrIran",
//       "standardChartered",
//       "taavonEslami",
//       "tosee",
//       "bankMarkazi",
//     ],
//     control: { type: "select" },
//   },
// };

// Default.args = {
//   logo: "saman",
// };
