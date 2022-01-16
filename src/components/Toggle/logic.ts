import {
  Vue, Component, Prop, VModel,
} from 'vue-property-decorator';

@Component({})
export default class Toggle extends Vue {
  @VModel({ type: String }) model!: string

  @Prop({ type: Boolean }) readonly disabled?: boolean
}
