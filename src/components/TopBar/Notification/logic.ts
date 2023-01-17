import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import NotificationBadge from '@/components/NotificationBadge/index.vue';
import Button from '@/components/Button/index.vue';

@Component({
  components: { Icon, NotificationBadge, Button },
})
export default class Notification extends Vue {
  @Prop({ type: String }) readonly badge?: string;
}
