import { View } from '@tarojs/components';

import { getPrefixCls } from '../utils';

import './cell-group.scss';

export interface CellGroupProps {
  title?: string;
}

const prefixCls = getPrefixCls('cell-group');

const CellGroup: React.FC<CellGroupProps> = (props) => {
  const { title, children } = props;

  return (
    <View className={prefixCls}>
      {title ? <View className={`${prefixCls}__title`}>{title}</View> : null}
      {children}
    </View>
  );
};

export default CellGroup;
