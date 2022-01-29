import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button/index.vue';

@Component({
  components: {
    Button,
  },
})
export default class Logic extends Vue {
}
