import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Status from '@/components/Status/index.vue';
import TypeRenderer from '../_typeRenderer/index.vue';

@Component({
  components: {
    Status,
    TypeRenderer,
  },
})
export default class Logic extends Vue {
  @Prop({ type: Object }) readonly data?: any

  @Prop({ type: String }) readonly linkPrefix!: string

  @Prop({ type: [String, Number] }) readonly linkId!: string | number

  @Prop({ type: String }) readonly width?: string

  @Prop({ type: String }) readonly minWidth?: string

  @Prop({ type: String }) readonly maxWidth?: string
}
