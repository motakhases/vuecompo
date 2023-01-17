import BankLogos from './index.vue';

export default {
  component: BankLogos,
  title: 'Components/BankLogos',
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BankLogos },
  data() {
    return {
      logos: [
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
  <div class="bg-surface-focus dark:bg-surface-dark-focus p-lg rounded-md flex flex-wrap rtl gap-x-md gap-y-lg">
    <div v-for="logo in logos" :key="logo" class="w-[18.6%]">
      <div class="text-center flex flex-col items-center bg-surface h-[150px] rounded-md py-xl px-md dark:text-surface dark:bg-surface-dark">
        <BankLogos :logo="logo" class="mb-sm flex-1 w-[66px]" />
        <span> {{ logo }} </span>
      </div>	
    </div>
  </div>
	`,
});
export const Default = Template.bind({});
