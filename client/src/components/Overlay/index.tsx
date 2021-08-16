import { View } from '@tarojs/components';
import React from 'react';
import type { ITouchEvent } from '@tarojs/components';
import classNames from 'classnames';

import { getPrefixCls } from '../utils';

import './index.scss';

export interface OverlayProps {
  show?: boolean; // 是否展示遮罩层
  zIndex?: any; // string | number ; // 层级
  className?: string; // 自定义class名称
  children?: React.ReactNode; //  子内容
  onClick?: (event: ITouchEvent) => void; // 点击方法控制显示隐藏
}
const prefixCls = getPrefixCls('overlay');
const Overlay: React.FC<OverlayProps> = (props) => {
  const { show, zIndex, className, children, onClick } = props;
  const classes = classNames(prefixCls, {
    [`${prefixCls}--active`]: show,
  });
  const style = {
    zIndex: zIndex,
  };
  const containerStyle = {
    zIndex: zIndex + 1,
  };
  /**
   *
   * @param event
   * 点击内容区域块
   */
  const containerClick = (event: ITouchEvent) => {
    event.stopPropagation();
  };
  // const query = Taro.createSelectorQuery()
  // query
  //   .select('#pageContainer')
  //   // .boundingClientRect()
  //   .node(rect=>{
  //     console.log("ee",rect)
  //   })
  //   .exec()
  /**
   * 弹框展示的时候 给当前页面添加  添加  overflow:hidden 属性
   */
  return (
    <View className={classes} onClick={onClick} style={style}>
      <View className={`${prefixCls}--mask`}></View>
      <View className={`${prefixCls}--container ${className ?? ''}`} style={containerStyle}>
        <View onClick={containerClick}> {children}</View>
      </View>
    </View>
  );
};

Overlay.defaultProps = {
  show: false,
  zIndex: 1,
};

export default Overlay;
