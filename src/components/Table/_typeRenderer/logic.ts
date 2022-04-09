import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Label from '@/components/Label/index.vue';
import Status from '@/components/Status/index.vue';
import Thumbnail from '@/components/Thumbnail/index.vue';
import Dropdown from '@/components/Dropdown/index.vue';
import Button from '@/components/Button/index.vue';

// Interface
interface ITypeRendererData {
  type: string;
  data: number | string | {
    title?: string;
    sub?: string;
    type?: string;
    link?: string
  }
}

@Component({
  components: {
    Label,
    Status,
    Thumbnail,
    Dropdown,
    Button,
  },
})
export default class Logic extends Vue {
  @Prop({ type: Object, required: true }) readonly data!: ITypeRendererData

  @Prop({ type: String }) readonly link!: string

  get linkComponentDetector(): string {
    return this.link ? 'a' : 'div';
  }
}
