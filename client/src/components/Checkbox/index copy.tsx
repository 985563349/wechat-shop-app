import { View, Label, Checkbox as NativeCheckbox } from '@tarojs/components';
import React, { useContext } from 'react';
import type { ButtonProps as NativeButtonProps, ITouchEvent } from '@tarojs/components';

import { CheckboxGroupContext, CheckboxGroup } from '../CheckboxGroup';
// import classNames from 'classnames';
import { getPrefixCls } from '../utils';
import './index.scss';

export interface CheckboxProps extends Omit<NativeButtonProps, 'onChange'> {
  name?: string;
  disabled?: boolean;
  value?: string | number;
  children: string;
  color?: string;
  onChange?: (value: string) => void;
}
const prefixCls = getPrefixCls('checkbox');
const Checkbox: React.FC<CheckboxProps> & {
  Group: typeof CheckboxGroup;
} = (props) => {
  const consumer = useContext(CheckboxGroupContext);
  const { name, disabled, value, color, children, onChange } = props;
  let finalValue = value ?? children;
  let _idx = -1;
  let checked = false;
  if (consumer) {
    finalValue = value ?? children;
    _idx = (consumer?.value as (string | number)[]).indexOf(finalValue);
    checked = _idx > -1;
  } else {
    checked = value ? true : false;
  }
  // eslint-disable-next-line no-console
  console.log('11哈哈');
  const attributes = {
    disabled: disabled ?? consumer?.disabled,
    checked: checked,
    color: color ?? '',
    value: finalValue,
    onChange: (e: ITouchEvent) => {
      // eslint-disable-next-line no-console
      if (consumer) {
        /**
         * 判断当前是否选择过了
         */
        let _value = consumer!.value;
        _idx = (consumer?.value as (string | number)[]).indexOf(finalValue);
        if (_idx > -1) {
          _value.splice(_idx, 1);
        } else {
          _value.push(e.target.value);
        }
        consumer?._onChange(_value);
      } else {
        const _val = !checked ? (name ? name : '') : '';
        // eslint-disable-next-line no-console
        onChange && onChange(_val);
      }
    },
  };
  return (
    <Label className={`${prefixCls}-wrapper`}>
      <View className={`${prefixCls} ${checked ? prefixCls + '-checked' : ''}`}>
        <NativeCheckbox className={`${prefixCls}-input`} {...attributes} />
        <View className='inner'></View>
      </View>
      <View>{children}</View>
    </Label>
  );
};
Checkbox.Group = CheckboxGroup;
export default Checkbox;
