import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import TextBox from './index.vue';

describe('TextBox', () => {
  enableAutoDestroy(afterEach);

  it('updates input value', async () => {
    const wrapper = shallowMount(TextBox);
    const textarea = wrapper.find('textarea');

    await textarea.setValue('new value');

    expect(textarea.element.value).toBe('new value');
  });

  it('adds active class to label', async () => {
    const wrapper = shallowMount(TextBox);
    const textarea = wrapper.find('textarea');
    const label = wrapper.find('label');

    await textarea.trigger('focusin');

    expect(wrapper.vm.activeLabel).toBe(true);
    expect(label.classes()).toContain('activeLabel');
  });

  it('checks input value length to be equal or smaller than limit', async () => {
    const wrapper = shallowMount(TextBox, {
      propsData: {
        limit: 10,
      },
    });
    const textarea = wrapper.find('textarea');

    await textarea.setValue('length');

    expect(textarea.element.value.length).toBeLessThanOrEqual(wrapper.vm.limit);
  });

  it('checks hint to exist with specific type', async () => {
    const wrapper = shallowMount(TextBox, {
      propsData: {
        hint: 'success',
        hintText: 'hintText',
      },
    });
    const hint = wrapper.find('.zpl-textbox-hint');

    expect(hint.exists()).toBe(true);
    expect(hint.text()).toBe('hintText');
    expect(hint.classes()).toContain('success');
  });

  it('checks rows of textarea to be equal to size', async () => {
    const wrapper = shallowMount(TextBox, {
      propsData: {
        size: 'medium',
      },
    });
    const textarea = wrapper.find('textarea');

    expect(textarea.attributes('rows')).toBe('3');
  });

  it('has attribute disabled when disabled set', () => {
    const wrapper = shallowMount(TextBox, {
      propsData: {
        disabled: true,
      },
    });
    const textarea = wrapper.find('textarea');

    expect(textarea.attributes('disabled')).toBeDefined();
  });

  it('has error class when error is true', () => {
    const wrapper = shallowMount(TextBox, {
      propsData: {
        error: true,
      },
    });
    const textarea = wrapper.find('textarea');

    expect(textarea.classes()).toContain('error');
  });
});
