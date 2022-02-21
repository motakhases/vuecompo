<template>
  <div class="zpl-pagination">
    <div class="right-side">
      <div class="limit">
        <span class="limit-title">تعداد سطر در هر صفحه:</span>
        <div class="relative inline-block">
          <Button
            :text="String(limit)"
            type="secondary"
            size="small"
            suffix-icon="angleDown"
            @click.native="limitBox = !limitBox"
          />
          <div class="items-box">
            <Popover
              v-show="limitBox"
              :items="limitsList"
              @select="emitChangeLimit"
            />
          </div>
        </div>
      </div>
      <div class="offset">
        <span class="offset-title">{{ period }}</span>
      </div>
    </div>
    <div class="left-side">
      <div class="page">
        <div class="relative inline-block">
          <Button
            :text="String(page)"
            type="tertiary"
            size="small"
            suffix-icon="angleDown"
            @click.native="pageBox = !pageBox"
          />
          <div class="items-box">
            <Popover
              v-show="pageBox"
              :items="pagesList"
              @select="emitChangePage"
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
            @click.native="emitChangePage(1)"
          />
        </div>
        <div class="arrow">
          <Button
            :disabled=" page==1 "
            type="tertiary"
            size="small"
            icon="angleRight"
            @click.native="emitChangePage(page-1)"
          />
        </div>
        <div class="arrow">
          <Button
            :disabled=" page==lastPage "
            type="tertiary"
            size="small"
            icon="angleLeft"
            @click.native="emitChangePage(page+1)"
          />
        </div>
        <div
          v-if=" page!=lastPage "
          class="arrow"
        >
          <Button
            type="secondary"
            size="small"
            icon="arrowLast"
            @click.native="emitChangePage(lastPage)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
