import {
  Vue, Prop, Component, Emit,
} from 'vue-property-decorator';
import Button from '@/components/Button/index.vue';
import Popover from '@/components/Popover/index.vue';
import { ListsObject, Translation } from '@/types';
import Dropdown from '@/components/Dropdown/index.vue';
import Loading from './Loading/index.vue';

@Component({
  components: {
    Button,
    Popover,
    Loading,
    Dropdown,
  },
})
export default class Pagination extends Vue {
  @Prop({ type: Number, default: 1 }) initPage!: number

  @Prop({ type: Number, default: 15 }) initLimit!: number

  @Prop({ type: Number, default: 1 }) lastPage!: number

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;

  @Emit('changeLimit')
  emitChangeLimit(newLimit: number): number {
    this.limit = newLimit;
    this.limitBox = false;
    return newLimit;
  }

  @Emit('changePage')
  emitChangePage(newPage: number): number {
    this.page = newPage;
    this.pageBox = false;
    return newPage;
  }

  limit = 0

  page = 0

  limitBox = false

  pageBox = false

  created(): void {
    this.limit = this.initLimit;
    this.page = this.initPage;
  }

  mounted() {
    this.$router?.push({
      query: { limit: String(this.initLimit), ...this.$route.query },
    });
  }

  get limitsList(): ListsObject[] {
    const list: ListsObject[] = [];
    for (let limit = 5; limit <= 25;) {
      list.push(
        {
          title: limit.toString(),
          action: () => this.emitChangeLimit(limit - 5),
        },
      );
      limit += 5;
    }
    return list;
  }

  get pagesList(): ListsObject[] {
    const list: ListsObject[] = [];
    // eslint-disable-next-line no-plusplus
    for (let page = 1; page <= this.lastPage; page++) {
      list.push(
        {
          title: page.toString(),
          action: () => this.emitChangePage(page),
        },
      );
    }
    return list;
  }

  get period():Translation {
    const all = this.lastPage * this.limit;
    const to = this.page * this.limit;
    const from = to - (this.limit - 1);
    return this.$i18n.t('pagination.result', { from, to, all });
  }
}

