import { Vue, Prop, Component } from 'vue-property-decorator';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import TextField from '@/components/TextField/index.vue';
import Button from '@/components/Button/index.vue';

@Component({
  components: {
    TextField,
    VuePersianDatetimePicker,
    Button,
  },
})
export default class Timepicker extends Vue {
  @Prop({ type: String }) value!: string;

  show = false;

  get model(): string {
    return this.value;
  }

  set model(value: string) {
    this.$emit('input', value);
  }

  toggleTime() {
    this.show = !this.show;
  }

  submitHandler(submit: () => void): void {
    submit();
    this.show = false;
  }

  outsideClick(event: Event): void {
    if (!this.$el.contains(event.target as HTMLInputElement)) {
      this.show = false;
    }
  }

  mounted(): void {
    document.documentElement.addEventListener('click', this.outsideClick, false);
  }
}
