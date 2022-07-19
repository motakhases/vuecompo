import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Label from '@/components/Label/index.vue';
import Status from '@/components/Status/index.vue';
import Thumbnail from '@/components/Thumbnail/index.vue';
import Avatar from '@/components/Avatar/index.vue';

// Interface
interface ITypeRendererData {
  type: string;
  id?: string | number;
  data: number | string | {
    title?: string;
    sub?: string;
    type?: string;
  }
}

@Component({
  components: {
    Label,
    Status,
    Thumbnail,
    Avatar,
  },
})
export default class Logic extends Vue {
  @Prop({ type: Object, required: true }) readonly data!: ITypeRendererData

  @Prop({ type: Object }) readonly params?: any

  @Prop({ type: String }) readonly routeName?: string

  @Prop({ type: [String, Number] }) readonly linkId?: string | number

  @Prop({ type: Function }) readonly handleClickFromOutside?: () => void

  get linkDetector(): string {
    return this.routeName ? 'router-link' : 'div';
  }
}
