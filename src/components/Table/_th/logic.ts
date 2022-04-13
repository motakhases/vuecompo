import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Label from '@/components/Label/index.vue';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: {
    Label,
    Icon,
  },
})
export default class Logic extends Vue {
  @Prop({ type: String }) readonly title?: string

  @Prop({ type: String }) readonly label?: string

  @Prop({ type: String }) readonly objectKey?: string

  @Prop({ type: String }) readonly width?: string

  @Prop({ type: String }) readonly minWidth?: string

  @Prop({ type: String }) readonly maxWidth?: string

  @Prop({ type: Boolean }) readonly canSort?: boolean

  sortIcon = ''

  sort(): void {
    if (this.canSort) {
      const order = `${this.objectKey}_asc`.toUpperCase();
      if (this.$route.query.order) {
        this.sortIcon = 'FilledArrowDown';
        const query = { ...this.$route.query };
        delete query.order;
        this.$router.replace({ query });
      } else {
        this.sortIcon = 'FilledArrowUp';
        this.$router.push({
          query: { ...this.$route.query, order },
        });
      }
    }
  }

  mounted() {
    if (this.$route.query.order) {
      this.sortIcon = 'FilledArrowUp';
    } else {
      this.sortIcon = 'FilledArrowDown';
    }
  }
}
