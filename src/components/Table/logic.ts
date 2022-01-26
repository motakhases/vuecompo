/* eslint-disable no-param-reassign */
import {
  Component, Prop, Vue,
} from 'vue-property-decorator';

// Sub components
import Th from './_th/index.vue';

// Components
import Status from '@/components/Status/index.vue';

interface IRowChecks {
  all: boolean;
  rows: string[] | number[];
}
@Component({
  components: {
    Status,
    Th,
  },
})
export default class Logic extends Vue {
  @Prop({ type: Array, required: true }) data!: any[]

  @Prop({ type: Array, required: true }) readonly columns!: any[]
}
