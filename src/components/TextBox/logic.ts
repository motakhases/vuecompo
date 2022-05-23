import {
  Vue, Component, Prop, VModel, Watch,
} from 'vue-property-decorator';
import { ValidationProvider } from 'vee-validate';
import Icon from '@/components/Icon/index.vue';
import '@/utils/validations';

@Component({
  components: {
    ValidationProvider,
    Icon,
  },
})
export default class TextBox extends Vue {
  @VModel({ type: String }) model!: string

  @Prop({ type: String, default: 'medium' }) readonly size?: string

  @Prop({ type: Boolean, default: false }) readonly disabled?: boolean

  @Prop({ type: String }) readonly inputName?: string;

  @Prop({ type: String, default: '' }) readonly label!: string

  @Prop({ type: Number }) readonly maxlength?: number

  @Prop({ type: String, default: '' }) readonly rules?: string

  @Prop({ type: String, default: '' }) readonly hint?: string

  @Prop({ type: String, default: '' }) readonly successMessage?: string

  @Prop({ type: String, default: '' }) readonly value!: string

  isInputFocused = false

  get rows():number {
    switch (this.size) {
    case 'small':
      return 2;
    case 'medium':
      return 3;
    case 'large':
      return 4;
    default:
      return 3;
    }
  }

  created() {
    this.isInputFocused = !!this.value.length;
  }

  onFocusIn():void {
    this.isInputFocused = true;
  }

  onFocusOut():void {
    if (!this.value) {
      this.isInputFocused = false;
    }
  }

  @Watch('value')
  updateLabel() {
    if (this.value.length) {
      this.isInputFocused = true;
    }
  }
}
