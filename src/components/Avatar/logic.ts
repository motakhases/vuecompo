import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: { Icon },
})
export default class Avatar extends Vue {
  @Prop({ type: String, default: 'medium' }) readonly size!: string;

  @Prop({ type: String }) readonly img!: string;

  @Prop({ type: Boolean, default: false }) readonly hasBorder!: boolean;
}
