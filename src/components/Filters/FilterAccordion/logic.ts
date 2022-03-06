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
  @VModel({ type: Array }) model!: string[]

  @Prop({ type: String, default: 'large' }) readonly size!: string

  @Prop({ type: String, required: true }) readonly val!: string

  @Prop({ type: String, required: true }) readonly name!: string

  @Prop({ type: String }) readonly text?: string

  @Prop({ type: Boolean }) readonly disabled?: boolean

  @Prop({ type: Function }) readonly change?: void

  isActive = false

  check(e:IEvent): void {
    const { checked } = e.target;
    this.isActive = checked;
  }

  mounted(): void {
    const queryList = Object.keys(this.$route.query);
    // if query list exists update active accordions
    if (queryList.length) {
      this.$emit('input', queryList);
      this.isActive = !!queryList.filter((i) => i === this.val).length;
    } else {
      this.$emit('input', []);
    }
  }
}
