import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from '@/components/Button/index.vue';
import TextBox from '@/components/TextBox/index.vue';
import ButtonGroup from '@/components/ButtonGroup/index.vue';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: {
    Button, TextBox, ButtonGroup,Icon,
  },
})
export default class Note extends Vue {
  @Prop({ type: String }) readonly title!: string;

  @Prop({ type: String }) readonly value!: string;

  @Prop({ type: Boolean, required: true, default: false })
  readonly show!: boolean

  @Prop({ type: Boolean, required: true, default: false })
  readonly loading!: boolean

  @Prop({ type: Boolean, default: false })
  readonly disabled?: boolean

  @Prop({ type: Function }) readonly addNote!: () => boolean

  @Prop({ type: Function }) readonly cancelNote!: () => boolean

  get noteText(): string | string[] {
    return this.value;
  }

  set noteText(value: string | string[]) {
    this.$emit('input', value);
  }
}
