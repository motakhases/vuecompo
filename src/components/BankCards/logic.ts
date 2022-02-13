import { Component, Prop, Vue } from 'vue-property-decorator';
import FilterSample from '@/components/FilterSample/index.vue';
import BankLogos from '@/components/BankLogos/index.vue';
import Thumbnail from '@/components/Thumbnail/index.vue';

@Component({
  components: { FilterSample, BankLogos, Thumbnail },
})
export default class BankCards extends Vue {
  @Prop({ type: String, required: true }) readonly bankName!: string

  @Prop({ type: String, required: true }) readonly logo!: string

  @Prop({ type: String, required: true }) readonly username!: string

  @Prop({ type: String, required: true }) readonly amount!: string

  @Prop({ type: String, required: true }) readonly iban!: string

  @Prop({ type: String, required: true }) readonly rrn!: string

  @Prop({ type: Boolean, default: false }) readonly defaultAccount!: boolean

  camelCaseConverter(str: string): string {
    return str
      .replace(/\s(.)/g, ($1) => $1.toUpperCase())
      .replace(/\s/g, '')
      .replace(/^(.)/, ($1) => $1.toLowerCase());
  }
}
