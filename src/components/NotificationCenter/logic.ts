import Vue from 'vue';
import moment from 'moment-jalaali';
import { now, yesterday, beforeDays } from '@/utils/momentCustom';
import card from './card/index.vue';
import noNotif from './NoNotif/index.vue';
import Tabs from '../Tabs/index.vue';
import Tab from '../Tabs/Tab/index.vue';
import Icon from '../Icon/index.vue';

export default Vue.extend({
  name: 'NotificationCenter',
  components: {
    card, noNotif, Tabs, Tab, Icon,
  },
  props: {
    announcements: {
      type: Array,
      default: () => [],
    },
    notifs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showArchives: false,
    };
  },
  methods: {
    todayCards(data:[]) {
      return data.filter(({ date }) => date === now('YYYY-M-D'));
    },
    yesterdayCards(data:[]) {
      return data.filter(({ date }) => date === yesterday('YYYY-M-D'));
    },
    thisWeekCards(data:[]) {
      const thisWeekNotifs = data.filter(({ date }) => moment(date).isAfter(beforeDays(7, 'YYYY-M-D'))) as [];
      return thisWeekNotifs.filter(({ date }) => moment(date).isSameOrBefore(beforeDays(2, 'YYYY-M-D')));
    },
    archiveAnnouncements() {
      const announcements = this.announcements as [];
      return announcements.filter(({ date }) => moment(date).isSameOrBefore(beforeDays(7, 'YYYY-M-D')));
    },
  },
});
