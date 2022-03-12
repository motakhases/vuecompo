import {
  Component, Prop, VModel, Vue,
} from 'vue-property-decorator';
import { IEvent } from '@/types/index';
import CheckBox from '@/components/CheckBox/index.vue';

@Component({
  components: {
    CheckBox,
  },
})
export default class Logic extends Vue {
  @VModel({ type: Array }) model!: string[];

  @Prop({ type: String, default: 'large' }) readonly size!: string;

  @Prop({ type: String, required: true }) readonly val!: string;

  @Prop({ type: [String, Array], required: true }) readonly value!: string;

  @Prop({ type: String, required: true }) readonly name!: string;

  @Prop({ type: String }) readonly text?: string;

  @Prop({ type: Boolean }) readonly disabled?: boolean;

  @Prop({ type: Function }) readonly change?: void;

  isActive = false;

  status = '';

  check(e: IEvent): void {
    const { checked } = e.target;
    this.isActive = checked;
  }

  mounted(): void {
    const queryKeys = Object.keys(this.$route.query);
    const amountList = ['min_amount', 'range_amount', 'max_amount'];

    if (queryKeys.length) {
      Object.keys(this.$route.query).forEach((key) => {
        if (amountList.includes(key) && this.val === 'amount') {
          queryKeys.splice(this.value.indexOf(key), 1, 'amount');
          this.$emit(
            'input',
            queryKeys,
          );
          this.isActive = true;
        } else {
          this.$emit('input', queryKeys);
          this.isActive = !!queryKeys.filter((i) => i === this.val).length;
        }
      });
    } else {
      this.$emit('input', []);
    }
  }
}
