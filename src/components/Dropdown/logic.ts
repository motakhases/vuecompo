import {
  Component, Prop, Vue, Watch, Ref,
} from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import Button from '@/components/Button/index.vue';
import { IDropdownOptions } from '@/types';

@Component({
  components: { Icon, Button },
})
export default class Dropdown extends Vue {
  @Prop({ type: Array }) readonly list!: IDropdownOptions[];

  @Prop({ type: String }) readonly width?: string;

  @Prop({ type: String }) readonly maxHeight?: string;

  @Prop({ type: [String, Object, Array, Number] }) readonly customPayload?: any;

  @Ref('button') readonly buttonRef!: HTMLElement

  @Ref('menu') readonly menuRef!: HTMLElement

  toggle = false;

  menuTop = '';

  style = {
    top: '',
    left: '',
  };

  windowWidth= window.innerWidth

  finalColor(color:string):string {
    return `!text-${color}`;
  }

  updateStyle(): void {
    // get the position of button and set it to menu

    if (this.buttonRef) {
      const {
        height, top, left, width,
      } = this.buttonRef?.children[0]?.getBoundingClientRect();
      const menuWidth = this.menuRef?.children[0]?.getBoundingClientRect().width;

      this.$set(this.style, 'top', `${top + height + 2}px`);

      // if left space is smaller than menu width so open menue on right
      if (menuWidth > left) {
        this.$set(this.style, 'left', `${left}px`);
      } else {
        this.$set(this.style, 'left', `${left - menuWidth + width}px`);
      }
    }
  }

  outsideClick(e: Event): void {
    // close menu
    if (!this.buttonRef?.children[0].contains(e.target as HTMLInputElement)) {
      this.$nextTick(() => {
        this.toggle = false;
      });
    }
  }

  onButtonClick(): void {
    this.toggle = !this.toggle;
  }

  @Watch('toggle')
  watchToggle(): void {
    this.$nextTick(() => {
      if (this.toggle) {
        this.updateStyle();
      }
    });
    if (this.toggle) {
      // append menu to body
      document.body.appendChild(this.menuRef);
    }
  }

  onResize():void {
    this.$nextTick(() => {
      // update position of menue when window is resizing
      this.windowWidth = window.innerWidth;
      if (this.toggle) {
        this.updateStyle();
      }
    });
  }

  mounted(): void {
    document.addEventListener('scroll', this.updateStyle);
    document.documentElement.addEventListener(
      'click',
      this.outsideClick,
      false,
    );
    this.buttonRef.children[0].addEventListener('click', this.onButtonClick, false);
    window.addEventListener('resize', this.onResize);
  }

  beforeDestroy():void {
    window.removeEventListener('resize', this.onResize);
    document.body.removeChild(this.menuRef);
  }
}
