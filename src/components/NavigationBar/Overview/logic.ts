import {
  Vue, Prop, Component,
} from 'vue-property-decorator';
import Thumbnail from '../../Thumbnail/index.vue';
import Icon from '../../Icon/index.vue';

@Component({
  components: {
    Icon, Thumbnail,
  },
})
export default class Overview extends Vue {
  @Prop({ type: Boolean, default: false }) active!: boolean

  @Prop({ type: String }) link!: string
}
