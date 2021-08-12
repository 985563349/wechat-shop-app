import { View } from '@tarojs/components';
import type { ITouchEvent } from '@tarojs/components';
import classNames from 'classnames';

import { getPrefixCls } from '../utils';
import CellGroup from '../CellGroup';

import './index.scss';

export interface CellProps {
  prefix?: React.ReactNode;
  title?: React.ReactNode;
  value?: React.ReactNode;
  label?: React.ReactNode;
  suffix?: React.ReactNode;
  center?: boolean;
  onClick?: (event: ITouchEvent) => void;
}

const prefixCls = getPrefixCls('cell');

const Cell: React.FC<CellProps> & {
  Group: typeof CellGroup;
} = (props) => {
  const { prefix, title, value, label, suffix, center, onClick } = props;

  const classes = classNames(prefixCls, {
    [`${prefixCls}--center`]: center,
  });

  return (
    <View className={classes} onClick={onClick}>
      {prefix ? <View className={`${prefixCls}__left-icon`}>{prefix}</View> : null}

      <View className={`${prefixCls}__title`}>
        <View>{title}</View>
        {label ? <View className={`${prefixCls}__label`}>{label}</View> : null}
      </View>

      <View className={`${prefixCls}__value`}>{value}</View>
      {suffix ? <View className={`${prefixCls}__right-icon`}>{suffix}</View> : null}
    </View>
  );
};

Cell.Group = CellGroup;

export default Cell;
