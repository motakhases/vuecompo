import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Label from '@/components/Label/index.vue';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: {
    Label,
    Icon,
  },
})
export default class Logic extends Vue {
  @Prop({ type: String }) readonly title?: string

  @Prop({ type: String }) readonly label?: string

  sortIcons = {
    ascending: 'FilledArrowUp',
    descending: 'FilledArrowDown',
  }

  sortOrder = null

  sort(): void {
    console.log('a');
  }
}
