import { Component, Prop, Vue } from 'vue-property-decorator';
import moment from 'moment-jalaali';
import { now, yesterday, beforeDays } from '@/utils/momentCustom';
import { Announcement } from '@/types';

import Tabs from '@/components/Tabs/index.vue';
import Tab from '@/components/Tabs/Tab/index.vue';
import Icon from '@/components/Icon/index.vue';
import Button from '@/components/Button/index.vue';
import noNotif from './NoNotif/index.vue';
import card from './card/index.vue';

@Component({
  components: {
    card, noNotif, Tabs, Tab, Icon, Button,
  },
})
export default class NotificationCenter extends Vue {
  @Prop({ type: Array, default: () => [] }) readonly announcements!: Announcement[]

  @Prop({ type: Array, default: () => [] }) readonly notifs?: Announcement[]

  showArchives = false

  isShow = false

  toggle(): void {
    this.isShow = !this.isShow;
  }

  todayCards(data:[]):never[] {
    return data?.filter(({ date }) => date === now('YYYY-M-D'));
  }

  yesterdayCards(data:[]):never[] {
    return data?.filter(({ date }) => date === yesterday('YYYY-M-D'));
  }

  thisWeekCards(data:[]):never[] {
    const thisWeekNotifs = data?.filter(({ date }) => moment(date).isAfter(beforeDays(7, 'YYYY-M-D')));
    return thisWeekNotifs?.filter(({ date }) => moment(date).isSameOrBefore(beforeDays(2, 'YYYY-M-D')));
  }

  archiveAnnouncements():Announcement[] {
    const { announcements } = this;
    return announcements?.filter(({ date }) => moment(date).isSameOrBefore(beforeDays(7, 'YYYY-M-D')));
  }
}

