import { View, Text } from '@tarojs/components';
import classNames from 'classnames';

import './index.scss';

export interface CellProps {
  title?: React.ReactNode;
  value?: React.ReactNode;
  label?: React.ReactNode;
  center?: boolean;
}

const prefixCls = 'c-cell';

const Cell: React.FC<CellProps> = (props) => {
  const { title, value, label, center } = props;

  const classes = classNames(prefixCls, {
    [`${prefixCls}--center`]: center,
  });

  return (
    <View className={classes}>
      <View className='c-cell__title'>
        <Text>{title}</Text>
        {label ? <View className='c-cell__label'>{label}</View> : null}
      </View>

      <View className='c-cell__value'>{value}</View>
    </View>
  );
};

Cell.defaultProps = {
  title: 'Title',
  value: 'value',
};

export default Cell;
