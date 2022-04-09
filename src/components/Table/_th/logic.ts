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

  @Prop({ type: Boolean }) readonly canSort?: boolean

  sortIcons = {
    asc: 'FilledArrowUp',
    des: 'FilledArrowDown',
  }

  sortOrder = 'asc'

  sort(): void {
    if (this.canSort) {
      this.changeSortOrder();

      const order = `${this.objectKey}_${this.sortOrder}`.toUpperCase();

      this.$router.push({
        query: { ...this.$route.query, order },
      });
    }
  }

  changeSortOrder(): void {
    switch (this.sortOrder) {
    case 'des':
      this.sortOrder = 'asc';
      break;
    case 'asc':
      this.sortOrder = 'des';
      break;
    default:
      break;
    }
  }
}
