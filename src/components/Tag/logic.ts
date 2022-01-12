import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: { Icon },
})
export default class Tag extends Vue {
  @Prop({ type: String, required: true }) readonly label!: string

  @Prop({ type: Boolean, default: false }) readonly btn!: boolean
}
