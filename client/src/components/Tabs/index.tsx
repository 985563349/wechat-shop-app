import { View, ScrollView } from '@tarojs/components';
import type { ITouchEvent } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { getPrefixCls, selectQueryClient, uuid } from '../utils';
import './index.scss';

const prefixCls = getPrefixCls('tabs');
const MIN_DISTANCE = 100;
const MAX_INTERVAL = 10;

export interface TabsProps {
  tabList: { title: string }[];
  current?: number;
  className?: string;
  animated?: boolean;
  scroll?: boolean;
  swipeable?: boolean;
  lineWidth?: string | number;
  onClick?: (index: number) => void;
}

/**
 *
 * @param props
 * todo   有没有其他的方式获取到元素相对父级的offsetLeft
 * tabId 如果是固定的，为什么需要tabId是动态的有效果
 */

const Tabs: React.FC<TabsProps> = (props) => {
  const { children, tabList, current, lineWidth, animated, className, swipeable, onClick, scroll } = props;

  // 生成当前tabId
  const tabId = scroll ? '' : uuid();

  const [left, setLeft] = useState(0);
  // 获取单个元素的宽度
  const [sigltItemWidth, setSigltItemWidth] = useState(0);

  // const [scrollLeft,setScrollLeft] = useState(0)
  const [scrollIntoView, setScrollIntoView] = useState('');

  let _touchDot = 0;
  let _timer: any = null;
  let _interval = 0;
  let _isMoving = false;

  const style = {
    width: `${lineWidth}px`,
    transform: `translateX(${left}px) `,
  };
  /**
   * tab BODY 滚动切换效果
   */
  const bodyStyle: React.CSSProperties = {};
  const transformStyle = `translate3d(-${(current ?? 0) * 100}%, 0px, 0px)`;

  Object.assign(bodyStyle, {
    transform: transformStyle,
    '-webkit-transform': transformStyle,
  });
  if (!animated) {
    bodyStyle.transition = 'unset';
  }
  /**
   * 获取单个tab的宽度
   */
  useEffect(() => {
    Taro.nextTick(async () => {
      const query = await selectQueryClient(`#tab${tabId}${current}`);
      setSigltItemWidth(query.width);
      setLeft(query.width - query.width / 2 - Number(lineWidth) / 2);

      scroll && setScrollIntoView(`tab${tabId}${current}`);
    });
  }, []);

  /**
   *
   * @param idx 当前tab的index索引
   */
  const handleClick = (idx = 0, e: ITouchEvent) => {
    const _index = Math.max(idx - 1, 0);
    const offsetLeft = Math.ceil(sigltItemWidth * (idx + 1)) - sigltItemWidth / 2 - Number(lineWidth) / 2;

    setLeft(offsetLeft);
    scroll && setScrollIntoView(`tab${tabId}${_index}`);
    onClick?.(idx);
  };
  /**
   * touch start
   * @param e touchEvent
   */
  const handleTouchStart = (e: ITouchEvent) => {
    if (!swipeable) return;
    // 获取触摸时的原点
    _touchDot = e.touches[0].pageX;
    // 使用js计时器记录时间
    _timer = setInterval(() => {
      _interval++;
    }, 100);
  };
  /**
   * touch start
   * @param e touchEvent
   */
  const handleTouchMove = (e: ITouchEvent) => {
    if (!swipeable) return;
    const touchMove = e.touches[0].pageX;
    const moveDistance = touchMove - _touchDot;
    const maxIndex = tabList.length;

    if (!_isMoving && _interval < MAX_INTERVAL && _touchDot > 20) {
      // 向左滑动
      if ((current ?? 0) + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
        _isMoving = true;
        handleClick(current ?? 0 + 1, e);

        // 向右滑动
      } else if ((current ?? 0) - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
        _isMoving = true;
        handleClick(current ?? 0 - 1, e);
      }
    }
  };

  /**
   * touch start
   * @param e touchEvent
   */
  const handleTouchEnd = (e: ITouchEvent) => {
    if (!swipeable) return;
    clearInterval(_timer);
    _interval = 0;
    _isMoving = false;
  };

  /**
   * tab 标签标题
   */
  const tabItems = tabList.map((item, index) => {
    const itemCls = classNames({
      [`${prefixCls}__item`]: true,
      [`${prefixCls}__item--active`]: current === index,
    });

    return (
      <View
        key={index}
        id={`tab${tabId}${index}`}
        className={itemCls}
        onClick={(e) => {
          handleClick(index, e);
        }}
      >
        <View className={`${prefixCls}__item--text`}>{item.title}</View>
      </View>
    );
  });

  /**
   * tab 标题 + 内容
   */
  return (
    <View className={`${prefixCls} ${className}`}>
      {scroll ? (
        <ScrollView
          id={tabId}
          className={`${prefixCls}--scroll ${prefixCls}__header`}
          scrollX
          scrollWithAnimation
          scrollIntoView={scrollIntoView}
        >
          {tabItems}
          <View className={`${prefixCls}__header--underline`} style={style}></View>
        </ScrollView>
      ) : (
        <View className={`${prefixCls}__header`}>
          {tabItems}
          <View className={`${prefixCls}__header--underline`} style={style}></View>
        </View>
      )}
      <View
        className={`${prefixCls}__body`}
        onTouchStart={(e) => {
          handleTouchStart(e);
        }}
        onTouchMove={(e) => {
          handleTouchMove(e);
        }}
        onTouchEnd={handleTouchEnd}
        style={bodyStyle}
      >
        {children}
      </View>
    </View>
  );
};

Tabs.defaultProps = {
  current: 0,
  lineWidth: 40,
  animated: true,
};

export default Tabs;
