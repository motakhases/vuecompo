import Vue from 'vue';

export default Vue.extend({
  name: 'SegmentedButton',
  props: {
    fill: {
      type: Boolean,
      default: false,
    },
  },
  data(): {
    tabs: any;
    } {
    return {
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    // wait a tick to ensure all child components have rendered
    this.$nextTick(() => {
      // all button children
      const buttons = this.$el.querySelectorAll('button');

      // check if a tab doesn't have active prop
      const noActiveProp = this.tabs.every((tab:any) => !tab.active);

      // if no active prop
      if (noActiveProp) {
        // add default active class to first button
        if (buttons.length) {
          buttons[0].classList.add('active');
        }
      }
      // change active class on click
      buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
          buttons.forEach((button) => {
            // if any button has active class remove it
            button.classList.remove('active');
          });
          // add active class to clicked button
          btn.classList.add('active');
        });
      });
    });
  },
  methods: {
    clickFirstBtn() {
      console.log('first');
    },
  },
});
