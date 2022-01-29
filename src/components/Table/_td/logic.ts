import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Status from '@/components/Status/index.vue';
import TypeRenderer from '../_typeRenderer/index.vue';

@Component({
  components: {
    Status,
    TypeRenderer,
  },
})
export default class Logic extends Vue {
  @Prop({ type: Object }) readonly data?: any
}
