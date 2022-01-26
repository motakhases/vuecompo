import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Label from '@/components/Label/index.vue';

@Component({
  components: {
    Label,
  },
})
export default class Logic extends Vue {
  @Prop({ type: String }) readonly title?: string

  @Prop({ type: String }) readonly label?: string
}
