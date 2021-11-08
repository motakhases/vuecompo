import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import SegmentedButton from './index.vue';

describe('SegmentedButton', () => {
  enableAutoDestroy(afterEach);

  it('if button has fill attribute, then it should have fill class', async () => {
    const wrapper = shallowMount(SegmentedButton, {
      propsData: {
        fill: true,
      },
    });
    expect(wrapper.classes()).toContain('fill');
  });

  it('children must be greater than 2', async () => {
    const wrapper = shallowMount(SegmentedButton, {
      slots: {
        default: `<Button>btn1</Button>
                  <Button>btn2</Button>`,
      },
    });
    const buttons = wrapper.findAll('Button');
    expect(buttons.length).toBeGreaterThanOrEqual(2);
  });
});
