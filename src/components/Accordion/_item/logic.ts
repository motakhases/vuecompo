import { Component, Prop, Vue } from 'vue-property-decorator';

import Icon from '@/components/Icon/index.vue';

@Component({
  components: {
    Icon,
  },
})
export default class AccordionItem extends Vue {
  @Prop({ type: String }) readonly title!: string;

  @Prop({ type: Boolean }) readonly open?: boolean;

  isOpen: null | undefined | boolean = null;

  toggle() {
    if (this.isOpen) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }
  }

  mounted() {
    this.isOpen = this.open;
  }
}
