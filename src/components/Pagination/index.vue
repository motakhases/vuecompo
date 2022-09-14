<template>
  <div class="zpl-pagination-box">
    <Loading v-if="loading" />
    <div class="zpl-pagination" v-else>
      <div class="right-side">
        <div class="limit">
          <span class="limit-title">
            {{ $t("pagination.rowNumber") }}
          </span>
          <div class="relative inline-block">
            <Dropdown
              :list="limitsList"
              width="68px"
              maxHeight="224px"
              selected
              :value="String(limit)"
            >
              <template slot="button">
                <Button
                  :text="String(limit)"
                  type="neutral"
                  size="small"
                  after-icon="angleDown"
                />
              </template>
            </Dropdown>
          </div>
        </div>
        <div class="offset">
          <span class="offset-title">{{ period }}</span>
        </div>
      </div>
      <div class="left-side">
        <div class="page">
          <div class="relative inline-block">
            <Dropdown
              :list="pagesList"
              width="68px"
              maxHeight="224px"
              selected
              :value="String(page)"
            >
              <template slot="button">
                <Button
                  :text="String(page)"
                  type="neutral"
                  size="small"
                  after-icon="angleDown"
                />
              </template>
            </Dropdown>
          </div>
          <span class="page-title">
            {{ $t("pagination.pageNumber", { lastPage }) }}
          </span>
        </div>
        <div class="arrows">
          <div v-if="page != 1" class="arrow">
            <Button
              type="tertiary"
              size="small"
              icon="arrowFirst"
              @click.native="emitChangePage(1)"
            />
          </div>
          <div class="arrow">
            <Button
              :disabled="page == 1"
              type="neutral"
              size="small"
              icon="angleRight"
              @click.native="emitChangePage(page - 1)"
            />
          </div>
          <div class="arrow">
            <Button
              :disabled="page == lastPage"
              type="neutral"
              size="small"
              icon="angleLeft"
              @click.native="emitChangePage(page + 1)"
            />
          </div>
          <div v-if="page != lastPage" class="arrow">
            <Button
              type="tertiary"
              size="small"
              icon="arrowLast"
              @click.native="emitChangePage(lastPage)"
            />
          </div>
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
