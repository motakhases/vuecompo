import {
  Vue, Component, Prop, VModel,
} from 'vue-property-decorator';

@Component({})
export default class Radio extends Vue {
  @VModel({ type: String }) model!: string

  @Prop({ type: String, required: true }) readonly val!: string

  @Prop({ type: String, required: true }) readonly name!: string

  @Prop({ type: String }) readonly text?: string

  @Prop({ type: Boolean }) readonly disabled?: boolean
}
