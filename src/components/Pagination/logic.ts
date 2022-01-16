import {
  Vue, Prop, Component, Emit,
} from 'vue-property-decorator';
import Button from '@/components/Button/index.vue';
import Popover from '@/components/Popover/index.vue';
import { ListsObject, Paginate } from '@/types';

@Component({
  components: {
    Button,
    Popover,
  },
})
export default class Pagination extends Vue {
  limit = 0

  page = 0

  limitBox = false

  pageBox = false

  @Prop({ type: Number, default: 1 }) initPage!: number

  @Prop({ type: Number, default: 4 }) initLimit!: number

  @Prop({ type: Number, default: 10 }) lastPage!: number

  created(): void {
    this.limit = this.initLimit;
    this.page = this.initPage;
  }

  get limitsList(): ListsObject[] {
    const list: ListsObject[] = [];
    for (let limit = 4; limit <= 24;) {
      list.push(
        {
          title: limit.toString(),
          value: limit,
        },
      );
      limit += 4;
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
          value: page,
        },
      );
    }
    return list;
  }

  get period():string {
    const all = this.lastPage * this.limit;
    const to = this.page * this.limit;
    const from = to - (this.limit - 1);
    return `${from} - ${to} از ${all} نتیجه`;
  }

  @Emit('paginate')
  changeLimit(newLimit:number):Paginate {
    this.limit = newLimit;
    this.limitBox = false;
    return {
      page: 1,
      limit: newLimit,
    };
  }

  @Emit('paginate')
  changePage(newPage:number):Paginate {
    this.page = newPage;
    this.pageBox = false;
    return {
      page: newPage,
      limit: this.limit,
    };
  }
}

