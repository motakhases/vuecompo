import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import CheckBox from '@/components/CheckBox/index.vue';

@Component({
  components: { Icon, CheckBox },
})
export default class CheckboxCard extends Vue {
  @Prop({ type: String }) readonly title!: string;

  @Prop({ type: String }) readonly description!: string;

  @Prop({ type: String }) readonly image!: string;

  @Prop({ type: String }) readonly val!: string;

  @Prop({ type: Array }) readonly value!: [];

  @Prop({ type: Boolean }) readonly disabled?: boolean;

  get model(): string[] {
    return this.value;
  }

  set model(value: string[]) {
    this.$emit('input', value);
  }

  selectCardHandler(): void {
    if (!this.disabled) {
      const isChecked = this.model.filter((i: string) => i === this.val);
      if (isChecked.length) {
        this.$emit(
          'input',
          this.model.filter((i: string) => i !== this.val),
        );
      } else {
        this.$emit('input', [...this.model, this.val]);
      }
    }
  }
}
