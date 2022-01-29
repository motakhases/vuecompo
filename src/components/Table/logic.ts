/* eslint-disable no-param-reassign */
import {
  Component, Prop, Vue,
} from 'vue-property-decorator';

// Sub components
import Th from './_th/index.vue';
import Td from './_td/index.vue';
import Card from './_card/index.vue';

// Components
import Status from '@/components/Status/index.vue';

@Component({
  components: {
    Status,
    Th,
    Td,
    Card,
  },
})
export default class Logic extends Vue {
  @Prop({ type: Array, required: true }) data!: any[]

  @Prop({ type: Array, required: true }) readonly columns!: any[]
}
