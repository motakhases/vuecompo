import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: { Icon },
})
export default class CheckMark extends Vue {
  @Prop({ type: Boolean, default: false }) readonly complete!: boolean

  @Prop({ type: Boolean, default: false }) readonly before!: boolean
}
