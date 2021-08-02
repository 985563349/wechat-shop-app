import { View } from '@tarojs/components';
import type { ITouchEvent } from '@tarojs/components';
import classNames from 'classnames';

import { getPrefixCls, useMergedState } from '../utils';

import './index.scss';

export type SwitchType = 'primary' | 'success' | 'warning' | 'danger';
export type SwitchSize = 'small' | 'large';

export interface SwitchProps {
  type?: SwitchType;
  size?: SwitchSize;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean, event: ITouchEvent) => void;
  onClick?: (checked: boolean, event: ITouchEvent) => void;
}

const prefixCls = getPrefixCls('switch');

const Switch: React.FC<SwitchProps> = (props) => {
  const { type, size, disabled, checked, defaultChecked, onChange, onClick } = props;

  const [innerValue, setInnerValue] = useMergedState<boolean>(false, { value: checked, defaultValue: defaultChecked });

  const classes = classNames(prefixCls, {
    [`${prefixCls}--active`]: innerValue,
    [`${prefixCls}--${type}`]: type,
    [`${prefixCls}--${size}`]: size,
    [`${prefixCls}--disabled`]: disabled,
  });

  function triggerChange(newValue: boolean, event: ITouchEvent) {
    if (!disabled) {
      setInnerValue(newValue);
      onChange?.(newValue, event);
    }
  }

  function onInternalClick(event: ITouchEvent) {
    triggerChange(!innerValue, event);
    onClick?.(innerValue, event);
  }

  return (
    <View className={classes} onClick={onInternalClick}>
      <View className={`${prefixCls}__core`}></View>
    </View>
  );
};

Switch.defaultProps = {
  defaultChecked: true,
};

export default Switch;
