import { View } from '@tarojs/components';
import React from 'react';
import type { ITouchEvent } from '@tarojs/components';
import classNames from 'classnames';

import { getPrefixCls } from '../utils';

import './index.scss';

export type OverlayType = 'primary' | 'success' | 'warning' | 'danger';
export type OverlaySize = 'small' | 'large';

export interface OverlayProps {
  show?: boolean; // 是否展示遮罩层
  zIndex?: any; // string | number ; // 层级
  duration?: number | string; // 动画持续时间
  className?: string; // 自定义class名称
  children?: React.ReactNode; //  子内容
  onClick?: (event: ITouchEvent) => void; // 点击方法
}

const prefixCls = getPrefixCls('overlay');

const Overlay: React.FC<OverlayProps> = (props) => {
  const { show, zIndex, duration, className, children, onClick } = props;
  const classes = classNames(prefixCls, {
    [`${className}`]: className,
  });
  const style = {
    zIndex: zIndex,
  };
  // todo  锁定背景滚动
  return (
    <>
      {show && (
        <View className={classes} onClick={onClick} style={style}>
          {children}
        </View>
      )}
    </>
  );
};

Overlay.defaultProps = {
  show: false,
  zIndex: 1,
};

export default Overlay;
