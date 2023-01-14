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
  @Prop({ type: String }) info?: string; // icon (component) e rahnama be hamrahe tooltip

  @Prop({ type: Boolean }) label?: boolean; // onvan balayi ??

  @Prop({ type: String }) title?: string; // onvan balayi ??

  @Prop({ type: String }) caption?: string; // matne payini ke kamel az samte next-panel miad

  @Prop({ type: String }) link?: string; // infoe button

  @Prop({ type: String }) content?: string; // adade vasati

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;
}
