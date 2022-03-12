import {
  Component, Prop, VModel, Vue,
} from 'vue-property-decorator';
import CheckBox from '@/components/CheckBox/index.vue';

@Component({
  components: {
    CheckBox,
  },
})
export default class Logic extends Vue {
  @VModel({ type: Array }) model!: string[]

  @Prop({ type: String, required: true }) readonly val!: string

  @Prop({ type: String }) readonly name?: string

  @Prop({ type: String }) readonly text?: string

  @Prop({ type: Boolean }) readonly disabled?: boolean

  @Prop({ type: Function }) readonly change?: void
}
