import Vue from 'vue';

export default Vue.extend({
  name: 'SegmentedButton',
  props: {
    segments: {
      type: Array,
      default: () => [
        {
          title: 'btn1',
          id: '0',
        },
        {
          title: 'btn2',
          id: '1',
        },
        {
          title: 'btn3',
          id: '2',
        },
      ],
    },
    fill: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedTab: '0',
    };
  },

});
