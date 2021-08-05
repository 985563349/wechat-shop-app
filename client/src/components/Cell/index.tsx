import { View, Text } from '@tarojs/components';
import classNames from 'classnames';

import { getPrefixCls } from '../utils';
import CellGroup from './cell-group';

import './index.scss';

export interface CellProps {
  title?: React.ReactNode;
  value?: React.ReactNode;
  label?: React.ReactNode;
  center?: boolean;
}

const prefixCls = getPrefixCls('cell');

const Cell: React.FC<CellProps> & {
  Group: typeof CellGroup;
} = (props) => {
  const { title, value, label, center } = props;

  const classes = classNames(prefixCls, {
    [`${prefixCls}--center`]: center,
  });

  return (
    <View className={classes}>
      <View className={`${prefixCls}__title`}>
        <Text>{title}</Text>
        {label ? <View className={`${prefixCls}__label`}>{label}</View> : null}
      </View>

      <View className={`${prefixCls}__value`}>{value}</View>
    </View>
  );
};

Cell.Group = CellGroup;

Cell.defaultProps = {
  title: 'Title',
  value: 'value',
};

export default Cell;
