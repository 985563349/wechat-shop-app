import { View } from '@tarojs/components';
import React from 'react';
import type { ITouchEvent } from '@tarojs/components';
import Overlay from '@/components/Overlay/index';
import classNames from 'classnames';
import { getPrefixCls } from '../utils';
import './index.scss';

export interface ActionSheetProps {
  show?: boolean; // 是否展示遮罩层
  zIndex?: any; // string | number ; // 层级
  className?: string; // 自定义class名称
  children?: React.ReactNode; //  子内容
  onClick?: (event: ITouchEvent) => void; // 点击方法
}
const prefixCls = getPrefixCls('ActionSheet');
const ActionSheet: React.FC<ActionSheetProps> = (props) => {
  const { show, zIndex, className, children, onClick } = props;
  const classes = classNames(prefixCls, {
    [`${prefixCls}--active`]: show,
  });

  return <Overlay show>eee</Overlay>;
};

ActionSheet.defaultProps = {};

export default ActionSheet;
