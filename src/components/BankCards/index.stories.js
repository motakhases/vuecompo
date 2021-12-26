import BankCards from "./index.vue";

export default {
  component: BankCards,
  title: "Components/BankCards",
};

const Template = (_, { argTypes }) => ({
  components: { BankCards },
  props: Object.keys(argTypes),
  data() {
    return {
      cards: [
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
	<div class="bg-surface-focus dark:bg-surface-dark-focus p-lg rounded-md flex flex-col gap-md rtl">
		<h1 class="mt-sm font-bold dark:text-surface">
			کارت بانکی
		</h1>
		<BankCards
			logo="zarinCard"
			username="شایسته ملک پور"
			bank-name="زرین کارت"
			amount="5120000"
			iban="IR870560085577703153460001"
			rrn="892938820001277640002746"
		/>
		<h1 class="mt-sm font-bold dark:text-surface">
			کارت بانکی های مختلف
		</h1>
		<div class="flex flex-wrap gap-md">
			<BankCards
				logo="eghtesadNovin"
				username="شایسته ملک پور"
				bank-name="اقتصاد نوین"
				amount="3650000"
				iban="IR870560085577703153460001"
				rrn="892938820001277640002746"
			/>
			<BankCards
				logo="shahr"
				username="شایسته ملک پور"
				bank-name="بانک شهر"
				amount="98570000"
				iban="IR870560085577703153460001"
				rrn="892938820001277640002746"
			/>
			<BankCards
				logo="pasargad"
				username="شایسته ملک پور"
				bank-name="پاسارگاد"
				amount="4350000"
				iban="IR870560085577703153460001"
				rrn="892938820001277640002746"
			/>
			<BankCards
				logo="resalat"
				username="شایسته ملک پور"
				bank-name="رسالت"
				amount="748560000"
				iban="IR870560085577703153460001"
				rrn="892938820001277640002746"
			/>
		</div>
		<h1 class="mt-sm font-bold dark:text-surface">
			کارت بانکی با حساب پیش فرض
		</h1>
		<BankCards
			logo="kosar"
			username="شایسته ملک پور"
			bank-name="کوثر"
			amount="89000000"
			iban="IR870560085577703153460001"
			rrn="892938820001277640002746"
			defaultAccount
		/>
	</div>
  `,
});

export const Default = Template.bind({});


// Default.args = {
//   username: "شایسته ملک پور",
//   bankName: "بانک سامان",
//   logo: "saman",
//   amount: "5120000",
//   iban: "IR870560085577703153460001",
//   rrn: "892938820001277640002746",
//   defaultAccount: false,
// };
