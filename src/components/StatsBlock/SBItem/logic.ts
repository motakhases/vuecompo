import { Component, Prop, Vue } from 'vue-property-decorator';
import Skeleton from '@/components/Skeleton/index.vue';
import Button from '@/components/Button/index.vue';
import Icon from '@/components/Icon/index.vue';
import Tooltip from '@/components/Tooltip/index.vue';
import Link from '@/components/Link/index.vue';

@Component({
  components: {
    Skeleton, Button, Icon, Tooltip, Link,
  },
})
export default class StatsBlockItem extends Vue {
  @Prop({ type: String, default: 'Info' }) infoType?: string; // icon (component) e rahnama be hamrahe tooltip

  @Prop({ type: String }) info?: string;

  @Prop({ type: Boolean }) label?: boolean;

  @Prop({ type: String }) title?: string;

  @Prop({ type: String }) link?: string;

  @Prop({ type: Boolean }) body?: boolean;

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;
}
