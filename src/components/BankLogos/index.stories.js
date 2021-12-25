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
  <div class="bg-gray-100 dark:bg-surface-dark p-lg rounded-md flex flex-wrap rtl gap-x-md gap-y-lg">
    <div v-for="logo in logos" :key="logo" class="w-[18.6%]">
      <div class="text-center flex flex-col items-center bg-surface h-[150px] rounded-md py-xl px-md dark:text-surface">
        <BankLogos :logo="logo" class="mb-sm flex-1" />
        <span> {{ logo }} </span>
      </div>	
    </div>
  </div>
	`,
});
export const Default = Template.bind({});

// Default.argTypes = {
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
