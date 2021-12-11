<template>
  <div class="zpl-pagination">
    <div class="right-side">
      <div class="limit">
        <span class="limit-title">تعداد سطر در هر صفحه:</span>
        <div class="inline-block relative">
          <Button
            :text="limit"
            type="secondary"
            size="small"
            after-icon="angleDown"
            @click.native="limitBox = !limitBox"
          />
          <div class="items-box">
            <Popover
              v-show="limitBox"
              :items="limitsList"
              @select="changeLimit"
            />
          </div>
        </div>
      </div>
      <div class="offset">
        <span>{{ period }}</span>
      </div>
    </div>
    <div class="left-side">
      <div class="page">
        <div class="inline-block relative">
          <Button
            :text="page"
            type="tertiary"
            size="small"
            after-icon="angleDown"
            @click.native="pageBox = !pageBox"
          />
          <div class="items-box">
            <Popover
              v-show="pageBox"
              :items="pagesList"
              @select="changePage"
            />
          </div>
        </div>
        <span class="page-title"> از {{ lastPage }} صفحه</span>
      </div>
      <div class="arrows">
        <div
          v-if=" page!=1 "
          class="arrow"
        >
          <Button
            type="secondary"
            size="small"
            icon="arrowFirst"
            @click.native="changePage(1)"
          />
        </div>
        <div class="arrow">
          <Button
            :disabled=" page==1 "
            type="tertiary"
            size="small"
            icon="angleRight"
            @click.native="changePage(page-1)"
          />
        </div>
        <div class="arrow">
          <Button
            :disabled=" page==lastPage "
            type="tertiary"
            size="small"
            icon="angleLeft"
            @click.native="changePage(page+1)"
          />
        </div>
        <div>
          <Button
            v-if=" page!=lastPage "
            type="secondary"
            size="small"
            icon="arrowLast"
            @click.native="changePage(lastPage)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import './style.scss';
import Button from '@/components/Button/index.vue';
import Popover from '@/components/Popover/index.vue';

export default {
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
      limit: null,
      page: null,
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
    period() {
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
    changeLimit(newLimit) {
      this.limit = newLimit;
      this.limitBox = false;
      this.$emit('paginate', {
        page: 1,
        limit: newLimit,
      });
    },
    changePage(newPage) {
      this.page = newPage;
      this.pageBox = false;
      this.$emit('paginate', {
        page: newPage,
        limit: this.limit,
      });
    },
  },
};
</script>
