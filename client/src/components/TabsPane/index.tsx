import { View } from '@tarojs/components';
import classNames from 'classnames';
import React from 'react';
// import classNames from 'classnames';
import { getPrefixCls } from '../utils';
import './index.scss';

export interface TabsPaneProps {
  index: number;
  current: number;
  className?: string;
}

const prefixCls = getPrefixCls('tabs-pane');
const TabsPane: React.FC<TabsPaneProps> = (props) => {
  const { index, current, className, children } = props;
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}--active`]: index === current,
    [`${prefixCls}--inactive`]: index !== current,
  });

  return <View className={classes}>{children}</View>;
};

TabsPane.defaultProps = {
  current: 0,
  index: 0,
};

export default TabsPane;
