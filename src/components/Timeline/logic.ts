import { Component, Prop, Vue } from 'vue-property-decorator';
import Label from '@/components/Label/index.vue';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: { Label, Icon },
})
export default class Timeline extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string

  @Prop({ type: String, required: true }) readonly subText!: string

  @Prop({ type: String, required: true }) readonly date!: string

  @Prop({ type: String, required: true }) readonly icon!: string

  @Prop({ type: [String, Number] }) readonly labelText?: string | number

  @Prop({ type: String }) readonly labelType?: string
}

