import { View } from '@tarojs/components';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { CheckboxGroupContext, CheckboxGroup } from '../CheckboxGroup';
import { getPrefixCls } from '../utils';
import './index.scss';

export interface CheckboxProps {
  name?: string;
  disabled?: boolean;
  value: string | number;
  color?: string;
  data?: string;
  onClick?: (value: string) => void;
}
const prefixCls = getPrefixCls('checkbox');
const Checkbox: React.FC<CheckboxProps> & {
  Group: typeof CheckboxGroup;
} = (props) => {
  const consumer = useContext(CheckboxGroupContext);

  const { name, disabled, value, color, children, onClick } = props;
  let checked = false;

  if (consumer) {
    checked = (consumer?.value as (string | number)[]).includes(value);
  } else {
    checked = value ? true : false;
  }

  const attributes = {
    disabled: disabled ?? consumer?.disabled,
    checked: checked,
    color: color ?? '',
    value,
    onClick: () => {
      if (disabled ?? consumer?.disabled) return;
      if (consumer) {
        let consumeValue = consumer!.value;
        if (checked) {
          consumeValue = consumeValue.filter((item) => item !== value);
        } else {
          consumeValue.push(value);
        }
        consumer?._onClick(consumeValue);
      } else {
        const checkedVal = !checked ? name ?? '' : '';
        onClick?.(checkedVal);
      }
    },
  };
  const classes = classNames(prefixCls, {
    [`${prefixCls}--checked`]: checked,
    [`${prefixCls}--disabled`]: attributes.disabled,
  });

  return (
    <View className={`${prefixCls}-wrapper`} {...attributes}>
      <View className={classes}>
        <View className='inner'></View>
      </View>
      <View className='space'>{children}</View>
    </View>
  );
};
Checkbox.Group = CheckboxGroup;
export default Checkbox;
