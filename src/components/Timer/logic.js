
export default {
  props: {
    time: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      timer: null,
      totalTime: (1 * this.time),
    };
  },

  computed: {
    minutes() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },

    seconds() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.padTime(seconds);
    },
  },

  methods: {
    start() {
      this.timer = setInterval(() => this.countdown(), 1000);
    },

    resetTimer() {
      this.totalTime = (1 * 60);
      clearInterval(this.timer);
      this.timer = null;
    },

    padTime(time) {
      return (time < 10 ? '0' : '') + time;
    },

    countdown() {
      if (this.totalTime >= 1) {
        // eslint-disable-next-line no-plusplus
        this.totalTime -= 1;
      } else {
        this.totalTime = 0;
        this.$emit('finish');
        this.resetTimer();
      }
    },
  },

  mounted() {
    this.start();
  },
};
