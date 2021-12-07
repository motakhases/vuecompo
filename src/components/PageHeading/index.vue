<template>
  <div
    ref="pageHeading"
    :class="['zpl-page-heading', {'fixed-page-heading':stickHeading}]"
  >
    <div
      v-if="returnBTN"
      class="return-btn"
      @click="router.go(-1)"
    >
      <Icon
        name="arrowRight"
        class="return-icon"
      />
    </div>
    <div class="heading-content">
      <span class="title">
        {{ title }}
      </span>
      <p
        v-show="desc.length>0 && !stickHeading"
        class="desc"
      >
        {{ desc }}
      </p>
    </div>
    <div
      v-if="hasButton"
      class="heading-btn"
    >
      <btn
        :on-click="btnOperate"
        v-bind="btn"
      >
        {{ btn.label }}
      </btn>
    </div>
  </div>
</template>

<script>

import './style.scss';
import Icon from '../Icon/index.vue';
import btn from '../Button/index.vue';

export default ({
  name: 'PageHeading',
  components: { Icon, btn },
  props: {
    returnBTN: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    sticky: {
      type: Boolean,
      default: false,
    },
    hasButton: {
      type: Boolean,
      default: false,
    },
    btn: {
      // set btn options like label , type , disable & etc
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      stickHeading: false,
    };
  },
  mounted() {
    if (this.sticky) {
      document.addEventListener('scroll', this.checkScrolling);
    }
  },
  methods: {
    checkScrolling() {
      const distanceOfTop = this.$refs.pageHeading.getBoundingClientRect().top;
      if (distanceOfTop <= 0) {
        this.stickHeading = true;
      } else if (window.scrollY === 0) {
        this.stickHeading = false;
      }
    },
    btnOperate() {
      this.$emit('btnClick');
    },
  },

});

</script>
