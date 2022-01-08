import {
  Vue, Component, Prop, VModel,
} from 'vue-property-decorator';

import { ValidationProvider } from 'vee-validate';
import Icon from '@/components/Icon/index.vue';

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

  @Prop({ type: String, default: '' }) readonly label!: string

  @Prop({ type: Number, default: 0 }) readonly maxlength!: number

  @Prop({ type: String, default: '' }) readonly rules!: string

  @Prop({ type: String, default: '' }) readonly hint!: string

  @Prop({ type: String, default: '' }) readonly successMessage!: string

  @Prop({ type: String, default: '' }) readonly value!: string

  isInputFocused = !!this.value.length

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

  onFocusIn():void {
    this.isInputFocused = true;
  }

  onFocusOut():void {
    if (!this.value) {
      this.isInputFocused = false;
    }
  }
}
