import {
  Component, Prop, Vue,
} from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import Radio from '@/components/Radio/index.vue';

@Component({
  components: { Icon, Radio },
})
export default class RadioCard extends Vue {
  @Prop({ type: String }) readonly title!: string;

  @Prop({ type: String }) readonly description!: string;

  @Prop({ type: String }) readonly image!: string;

  @Prop({ type: String }) readonly val!: string;

  @Prop({ type: String }) readonly value!: string;

  @Prop({ type: Boolean }) readonly disabled?: boolean

  get model(): string | number {
    return this.value;
  }

  set model(value: string | number) {
    this.$emit('input', value);
  }

  selectCardHandler():void {
    if (!this.disabled) {
      this.$emit('input', this.val);
    }
  }
}
