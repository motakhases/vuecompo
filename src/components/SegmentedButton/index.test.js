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
});
