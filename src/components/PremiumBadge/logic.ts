import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: { Icon },
})
export default class PremiumBadge extends Vue {
  @Prop({ type: Boolean, default: false }) readonly isCollapsed?: boolean
}
