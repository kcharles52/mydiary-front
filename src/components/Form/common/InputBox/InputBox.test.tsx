// react libraries
import * as React from 'react';

// third-party libraries
import { mount } from 'enzyme';

// components
import InputBox from './';

describe('The InputBox component', () => {
  it('displays an error message if error prop is passed in', () => {
    const props = {
      error: 'Some error',
    };
    const wrapper = mount(<InputBox { ...props as any } />);
    expect(wrapper.find('.input-box-group__control__error-text').text()).toBe(props.error);
  });

  it('sets placeholder of input box to the placeholder props passed in', () => {
    const props = {
      placeholder: 'Apple TV',
    };

    const wrapper = mount(<InputBox { ...props as any } />);
    expect(wrapper.find('input').props().placeholder).toBe(props.placeholder);
  });

  it('calls onChange prop when input value changes', () => {
    const props = {
      draggable: true,
      onChange: jest.fn(),
    };

    const wrapper = mount(<InputBox { ...props as any } />);
    wrapper.find('input').simulate('change');
    expect(props.onChange).toHaveBeenCalled();
  });

  it('sets value of input to the value prop if passed in', () => {
    const props = {
      draggable: true,
      value: 'INPUT_DEFAULT_VALUE',
      onChange: jest.fn(),
    };
    const wrapper = mount(<InputBox { ...props as any } />);
    expect(wrapper.find('input').props().value).toBe(props.value);
  });

  it('renders a textarea if `textarea` prop is true', () => {
    const props = {
      textarea: true,
    };

    const wrapper = mount(<InputBox { ...props as any } />);
    expect(wrapper.find('textarea').length).toBe(1);
  });

  it('sets name, value, placeholder and onChange to textarea if passed in', () => {
    const props = {
      value: 'INPUT_DEFAULT_VALUE',
      onChange: jest.fn(),
      textarea: true,
      name: 'test-textarea',
    };

    const wrapper = mount(<InputBox { ...props as any } />);
    const textareaProps = wrapper.find('textarea').props() as any;
    expect(textareaProps.value).toBe(props.value);
    expect(textareaProps.onChange).toBe(props.onChange);
    expect(textareaProps.name).toBe(props.name);
  });
});
