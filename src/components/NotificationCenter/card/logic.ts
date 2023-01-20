import { Component, Prop, Vue } from 'vue-property-decorator';
import Link from '@/components/Link/index.vue';
import Icon from '@/components/Icon/index.vue';
import { Announcement } from '@/types';

@Component({
  components: { Link, Icon },
})
export default class NotificationCard extends Vue {
  @Prop({ type: Array, required: true }) readonly cards!: Announcement[];
}
