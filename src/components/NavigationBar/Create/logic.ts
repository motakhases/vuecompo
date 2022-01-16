import {
  Vue, Prop, Component,
} from 'vue-property-decorator';
import Thumbnail from '../../Thumbnail/index.vue';

@Component({
  components: {
    Thumbnail,
  },
})
export default class Create extends Vue {
  @Prop({ type: Boolean, default: false }) active!: boolean

  @Prop({ type: String }) link!: string
}
