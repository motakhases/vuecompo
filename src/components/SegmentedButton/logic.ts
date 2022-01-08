import { Component, Prop, Vue } from 'vue-property-decorator';
import SegmentBtn from './Button/index.vue';
import { SegmentedBtn } from '@/types';

@Component({
  components: { SegmentBtn },
})

export default class SegmentedButton extends Vue {
  @Prop({ type: Array, required: true, default: () => [] })
  readonly items!: SegmentedBtn[];

  @Prop({ type: Boolean, default: false }) readonly fill!: boolean;

   tabs:Array<Vue>= [];

   created() :void{
     this.tabs = this.$children;
   }

   mounted() :void{
     // wait a tick to ensure all child components have rendered
     this.$nextTick(() => {
       // all button children
       const buttons = this.$el.querySelectorAll('button');

       // check if a tab doesn't have active prop
       const noActiveProp = this.tabs.every((tab:Vue) => !tab.active);

       // if no active prop
       if (noActiveProp) {
         // add default active class to first button
         if (buttons.length) {
           buttons[0].classList.add('active');
         }
       }
       // change active class on click
       buttons.forEach((btn) => {
         btn.addEventListener('click', () => {
           buttons.forEach((button) => {
             // if any button has active class remove it
             button.classList.remove('active');
           });
           // add active class to clicked button
           btn.classList.add('active');
         });
       });
     });
   }
}
