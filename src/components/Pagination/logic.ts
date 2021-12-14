import Vue from 'vue';
import Button from '@/components/Button/index.vue';
import Popover from '@/components/Popover/index.vue';

export default Vue.extend({
  components: { Button, Popover },
  props: {
    initPage: {
      type: Number,
      default: 1,
    },
    initLimit: {
      type: Number,
      default: 4,
    },
    lastPage: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      limit: 0,
      page: 0,
      limitBox: false,
      pageBox: false,
    };
  },
  computed: {
    limitsList() {
      const list = [];
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
    },
    pagesList() {
      const list = [];
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
    },
    period():string {
      const all = this.lastPage * this.limit;
      const to = this.page * this.limit;
      const from = to - (this.limit - 1);
      return `${from} - ${to} از ${all} نتیجه`;
    },
  },
  created() {
    this.limit = this.initLimit;
    this.page = this.initPage;
  },
  methods: {
    changeLimit(newLimit:number) {
      this.limit = newLimit;
      this.limitBox = false;
      this.$emit('paginate', {
        page: 1,
        limit: newLimit,
      });
    },
    changePage(newPage:number) {
      this.page = newPage;
      this.pageBox = false;
      this.$emit('paginate', {
        page: newPage,
        limit: this.limit,
      });
    },
  },
});
