import { View, Label } from '@tarojs/components';
import React, { useContext } from 'react';
import type { ITouchEvent } from '@tarojs/components';

import { CheckboxGroupContext } from '../CheckboxGroup';
// import classNames from 'classnames';
import { getPrefixCls } from '../utils';
import './index.scss';

export interface CheckboxProps {
  name?: string;
  disabled?: boolean;
  value?: string | number;
  children: string;
  color?: string;
  onClick?: (value: string) => void;
}
const prefixCls = getPrefixCls('checkbox');
const Checkbox: React.FC<CheckboxProps> = (props) => {
  const consumer = useContext(CheckboxGroupContext);
  const { name, disabled, value, color, children, onClick } = props;
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
  const attributes = {
    disabled: disabled ?? consumer?.disabled,
    checked: checked,
    color: color ?? '',
    value: finalValue,
    onClick: (e: ITouchEvent) => {
      if (consumer) {
        /**
         * 判断当前是否选择过了
         */
        let _value = consumer!.value;
        _idx = (consumer?.value as (string | number)[]).indexOf(finalValue);
        if (_idx > -1) {
          _value.splice(_idx, 1);
        } else {
          console.log(e);
          _value.push(e.target.value);
        }
        consumer?._onClick(_value);
      } else {
        const _val = !checked ? (name ? name : '') : '';
        // eslint-disable-next-line no-console
        onClick?.(_val);
      }
    },
  };
  return (
    <Label className={`${prefixCls}-wrapper`} {...attributes}>
      <View className={`${prefixCls}  ${checked ? prefixCls + '-checked' : ''}`}>
        <View className={`${prefixCls}-input`}></View>
        <View className='inner'></View>
      </View>
      <View className='space'>{children}</View>
    </Label>
  );
};
// Checkbox.Group = CheckboxGroup
export default Checkbox;
