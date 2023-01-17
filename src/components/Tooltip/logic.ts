import {
  Component, Prop, Vue, Ref, Watch,
} from 'vue-property-decorator';
import Indicator from './Indicator/index.vue';

@Component({
  components: { Indicator },
})
export default class Tooltip extends Vue {
  @Prop({ type: String, required: true }) readonly text!: string

  @Prop({ type: String, default: 'bottomLeft' }) readonly position!: string

  @Prop({ type: String, default: 'smallSpace' }) readonly space!: string

  @Prop({ type: Boolean, default: true }) readonly indicator!: boolean

  @Prop({ type: Boolean }) readonly hideTooltip?: boolean

  @Prop({ type: String, default: 'large' }) readonly size!: string

  @Prop({ type: String, default: 'hover' }) readonly trigger!: string

  @Ref('tooltipBtn') readonly buttonRef!: HTMLElement;

  @Ref('tooltip') readonly tooltipRef!: any;

  toggle = false;

  menuTop = '';

  style = {
    top: '',
    left: '',
  };

  windowWidth = window.innerWidth;

  updateStyle(): void {
    // get the position of button and set it to tooltip
    const distance = this.space === 'smallSpace' ? 8 : 16;
    if (this.buttonRef) {
      const {
        height, top, left, width,
      } = this.buttonRef?.children[0]?.getBoundingClientRect();
      const tooltipWidth = this.tooltipRef?.children[0]?.getBoundingClientRect().width;
      const tooltipHeight = this.tooltipRef?.children[0]?.getBoundingClientRect().height;

      if (this.position === 'left') {
        this.$set(this.style, 'left', `${left - tooltipWidth - distance}px`);
        this.$set(this.style, 'top', `${top + height / 2 - tooltipHeight / 2}px`);
      }
      switch (this.position) {
      case 'left':
        this.$set(this.style, 'left', `${left - tooltipWidth - distance}px`);
        this.$set(this.style, 'top', `${top + height / 2 - tooltipHeight / 2}px`);
        break;
      case 'right':
        this.$set(this.style, 'left', `${left + width + distance}px`);
        this.$set(this.style, 'top', `${top}px`);
        break;
      case 'bottomRight':
        this.$set(this.style, 'left', `${left + width - tooltipWidth}px`);
        this.$set(this.style, 'top', `${top + height + distance}px`);
        break;
      case 'bottomCenter':
        this.$set(this.style, 'left', `${left + width / 2 - tooltipWidth / 2}px`);
        this.$set(this.style, 'top', `${top + height + distance}px`);
        break;
      case 'bottomLeft':
        this.$set(this.style, 'left', `${left}px`);
        this.$set(this.style, 'top', `${top + height + distance}px`);
        break;
      case 'topRight':
        this.$set(this.style, 'left', `${left + width - tooltipWidth}px`);
        this.$set(this.style, 'top', `${top - tooltipHeight - distance}px`);
        break;
      case 'topCenter':
        this.$set(this.style, 'left', `${left + width / 2 - tooltipWidth / 2}px`);
        this.$set(this.style, 'top', `${top - tooltipHeight - distance}px`);
        break;
      case 'topLeft':
        this.$set(this.style, 'left', `${left}px`);
        this.$set(this.style, 'top', `${top - tooltipHeight - distance}px`);
        break;
      default:
        this.$set(this.style, 'left', `${left - tooltipWidth - distance}px`);
        this.$set(this.style, 'top', `${top}px`);
      }

      // if left space is smaller than menu width so open menue on right
      // if (menuWidth > left) {
      //   this.$set(this.style, 'left', `${left}px`);
      // } else {
      //   this.$set(this.style, 'left', `${left - menuWidth + width}px`);
      // }
    }
  }

  onButtonTrigger(): void {
    if (this.hideTooltip) {
      this.toggle = false;
    } else {
      this.toggle = !this.toggle;
    }
  }

  @Watch('toggle')
  watchToggle(): void {
    this.$nextTick(() => {
      if (this.toggle) {
        this.updateStyle();
      }
    });
    if (this.toggle) {
      // append tooltip to body
      document.body.appendChild(this.tooltipRef);
    }
  }

  @Watch('hideTooltip')
  hide(): void {
    if (this.hideTooltip) {
      this.toggle = false;
    }
  }

  getScrollParent = (node:any):any => {
    if (node === null) {
      return null;
    } if (node.scrollHeight > node.clientHeight) {
      return node;
    }

    return this.getScrollParent(node.parentNode);
  }

  outsideTrigger(e: Event): void {
    // close tooltip
    if (!this.buttonRef?.children[0].contains(e.target as HTMLInputElement)) {
      this.$nextTick(() => {
        this.toggle = false;
      });
    }
  }

  onResize(): void {
    this.$nextTick(() => {
      // update position of menue when window is resizing
      this.windowWidth = window.innerWidth;
      if (this.toggle) {
        this.updateStyle();
      }
    });
  }

  click() {
    // console.log('clik');
  }

  triggerHandler() {
    if (this.trigger === 'hover') {
      document.documentElement.addEventListener(
        'mouseover',
        this.outsideTrigger,
        false,
      ); this.buttonRef.children[0].addEventListener(
        'mouseenter',
        this.onButtonTrigger,
        false,
      );
    } else if (this.trigger === 'click') {
      this.buttonRef.children[0].addEventListener(
        'click', () => {
          this.onButtonTrigger();
          // hide tooltip after 1500ms
          setTimeout(() => {
            this.toggle = false;
          }, 1500, this);
        },
        false,
      );
      document.documentElement.addEventListener(
        'click',
        this.outsideTrigger,
        false,
      );
    }
  }

  mounted(): void {
    document.addEventListener('scroll', this.updateStyle);

    window.addEventListener('resize', this.onResize);
    if (this.getScrollParent(this.buttonRef)) {
      this.getScrollParent(this.buttonRef).addEventListener('scroll', this.updateStyle);
    }
    this.triggerHandler();
  }

  beforeDestroy(): void {
    window.removeEventListener('resize', this.onResize);
    if (this.tooltipRef) {
      this.tooltipRef.parentNode.removeChild(this.tooltipRef);
    }
    this.toggle = false;
  }
}
