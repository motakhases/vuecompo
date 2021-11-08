import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import TextField from './index.vue';

describe('TextField', () => {
  enableAutoDestroy(afterEach);

  it('updates input value', async () => {
    const wrapper = shallowMount(TextField);
    const input = wrapper.find('input');

    await input.setValue('new value');

    expect(input.element.value).toBe('new value');
  });

  it('adds active class to label', async () => {
    const wrapper = shallowMount(TextField);
    const input = wrapper.find('input');
    const label = wrapper.find('label');

    await input.trigger('focusin');

    expect(wrapper.vm.activeLabel).toBe(true);
    expect(label.classes()).toContain('active');
  });

  it('checks input value length to be equal or smaller than limit', async () => {
    const wrapper = shallowMount(TextField, {
      propsData: {
        limit: 10,
      },
    });
    const input = wrapper.find('input');

    await input.setValue('length');

    expect(input.element.value.length).toBeLessThanOrEqual(wrapper.vm.limit);
  });

  it('checks unit to exist', async () => {
    const wrapper = shallowMount(TextField, {
      propsData: {
        unit: 'Dollar',
      },
    });
    const unit = wrapper.find('.zpl-textfield-unit');

    expect(unit.exists()).toBe(true);
    expect(unit.text()).toBe('Dollar');
  });

  it('checks hint to exist with specific type', async () => {
    const wrapper = shallowMount(TextField, {
      propsData: {
        hint: 'success',
        hintText: 'hintText',
      },
    });
    const hint = wrapper.find('.zpl-textfield-hint');

    expect(hint.exists()).toBe(true);
    expect(hint.text()).toBe('hintText');
    expect(hint.classes()).toContain('success');
  });

  it(`increases value by one when clicking on stepper up,
      if type is number and stepper is true`, async () => {
    const wrapper = shallowMount(TextField, {
      propsData: {
        type: 'number',
        stepper: true,
      },
    });
    const stepperBtn = wrapper.findAll('.zpl-textfield-stepper-btn').at(0);

    await stepperBtn.trigger('click');

    expect(wrapper.emitted().input[0][0]).toBe('1');
  });
});
