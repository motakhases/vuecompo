import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Button from './index.vue';

describe('Button', () => {
  enableAutoDestroy(afterEach);

  it('if button has active attribute, then it should have active class', async () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        active: true,
      },
    });
    expect(wrapper.classes()).toContain('active');
  });
});
