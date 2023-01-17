import BankCards from './index.vue';

export default {
  component: BankCards,
  title: 'Components/BankCards',
};

const Template = (_, { argTypes }) => ({
  components: { BankCards },
  props: Object.keys(argTypes),
  data() {
    return {
      cards: [
        'Saman',
        'Pasargad',
        'Ayandeh',
        'Refah',
        'Dey',
        'Hekmat',
        'Agriculture',
        'Melal',
        'ToseTavon',
        'SanatMadan',
        'Khavarmiane',
        'Mellat',
        'EghtesadNovin',
        'Melli',
        'Parsian',
        'Kosar',
        'Sepah',
        'IranZamin',
        'TourismBank',
        'ZarinCard',
        'KarAfarin',
        'PostBank',
        'Sina',
        'CityBank',
        'Ansar',
        'Tejarat',
        'Sarmayeh',
        'Saderat',
        'Ghavamin',
        'Maskan',
        'Resalat',
        'Noor',
        'ToseSaderat',
        'caspian',
        'futurebank',
        'iranEurope',
        'iranVenezuela',
        'MehrEghtesad',
        'Mehr',
        'standardChartered',
        'taavonEslami',
        'ToseEtebari',
        'Cbi',
      ],
    };
  },
  template: `
	<div class="bg-surface-focus dark:bg-surface-dark-focus p-lg rounded-md flex flex-col gap-md rtl">
		<h1 class="mt-sm font-bold dark:text-surface">
			کارت بانکی
		</h1>
		<BankCards
			logo="ZarinCard"
			username="شایسته ملک پور"
			bank-name="زرین کارت"
			amount="5120000"
			iban="IR870560085577703153460001"
			rrn="892938820001277640002746"
			class="w-[368px]"
			loading
		/>
		<h1 class="mt-sm font-bold dark:text-surface">
			کارت بانکی های مختلف
		</h1>
		<div class="flex flex-wrap gap-md">
		<BankCards
		logo="Resalat"
		username="شایسته ملک پور"
		bank-name="رسالت"
		iban="IR870560085577703153460001"

	/>
	<BankCards
		username="شایسته ملک پور"
		bank-name="رسالت"
		iban="IR870560085577703153460001"
loading
	/>
			<BankCards
				logo="EghtesadNovin"
				username="شایسته ملک پور"
				bank-name="اقتصاد نوین"
				amount="3650000"
				iban="IR870560085577703153460001"
				rrn="892938820001277640002746"
			/>
			<BankCards
				logo="Shahr"
				username="شایسته ملک پور"
				bank-name="بانک شهر"
				amount="98570000"
				iban="IR870560085577703153460001"
				rrn="892938820001277640002746"
			/>
			<BankCards
				logo="Pasargad"
				username="شایسته ملک پور"
				bank-name="پاسارگاد"
				amount="4350000"
				iban="IR870560085577703153460001"
				rrn="892938820001277640002746"
			/>
			<BankCards
				logo="Resalat"
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
			logo="Kosar"
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
