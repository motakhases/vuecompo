import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Label from '@/components/Label/index.vue';
import Status from '@/components/Status/index.vue';
import Thumbnail from '@/components/Thumbnail/index.vue';

interface ITypeRendererData {
  type: string;
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
  },
})
export default class Logic extends Vue {
  @Prop({ type: Object, required: true }) readonly data!: ITypeRendererData
}
