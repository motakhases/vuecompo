import { Component, Prop, Vue } from 'vue-property-decorator';
import FilterSample from '@/components/FilterSample/index.vue';
import BankLogos from '@/components/BankLogos/index.vue';
import Thumbnail from '@/components/Thumbnail/index.vue';
import Loading from './Loading/index.vue';

@Component({
  components: {
    FilterSample, BankLogos, Thumbnail, Loading,
  },
})
export default class BankCards extends Vue {
  @Prop({ type: String }) readonly bankName!: string

  @Prop({ type: String }) readonly logo!: string

  @Prop({ type: String }) readonly username!: string

  @Prop({ type: String }) readonly amount?: string

  @Prop({ type: String }) readonly iban!: string

  @Prop({ type: String }) readonly rrn?: string

  @Prop({ type: Boolean, default: false }) readonly defaultAccount!: boolean

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;

  camelCaseConverter(str: string): string {
    return str
      .replace(/\s(.)/g, ($1) => $1.toUpperCase())
      .replace(/\s/g, '')
      .replace(/^(.)/, ($1) => $1.toLowerCase());
  }
}
