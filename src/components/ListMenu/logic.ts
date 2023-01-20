import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';

import { IListMenu } from '@/types';

@Component({
  components: { Icon },
})
export default class Card extends Vue {
  @Prop({ type: Array }) readonly list!: IListMenu[];

  items: null | IListMenu[] = null;

  @Emit()
  itemClicked(id: number) {
    if (this.items && this.items.length) {
      this.items.forEach((i) => {
        if (i.id === id) {
          // eslint-disable-next-line no-param-reassign
          i.active = true;
        } else {
          // eslint-disable-next-line no-param-reassign
          i.active = false;
        }
        this.$forceUpdate();
      });
    }

    return id;
  }

  mounted() {
    this.items = this.list;
  }
}
