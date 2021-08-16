import { View, Image, Text } from '@tarojs/components';
import React from 'react';
// import type { ITouchEvent } from '@tarojs/components';
// import classNames from 'classnames';
import { getPrefixCls, defaultPrefixCls } from '../utils';
import './index.scss';

export interface CardProps {
  num: string; // 购买数量
  title: string; // 商品名称
  price: string; // 商品价格
  tag?: string; // 标签
  desc: string; //  商品描述
  thumb: string; // 左侧图片URL
  currency?: string; // 货币符号
  originPrice: string;
  className?: string; // 自定义class名称
}
const prefixCls = getPrefixCls('card');
const Card: React.FC<CardProps> = (props) => {
  const { num, children, price, thumb, desc, title, originPrice, currency } = props;

  return (
    <>
      <View className={prefixCls}>
        <View className={`${prefixCls}__head`}>
          {/* 图片 */}
          <Image className={`${prefixCls}__img`} src={thumb} />
          {/* 产品信息 */}
          <View className={`${prefixCls}__content`}>
            <View>
              <View className={`${prefixCls}__title ${defaultPrefixCls}-multi-ellipsis--l2`}>{title}</View>
              <View className={`${prefixCls}__desc ${defaultPrefixCls}-ellipsis`}>{desc}</View>
            </View>
            <View className={`${prefixCls}__price`}>
              <View>
                <Text className={`${prefixCls}__price-currency`}>{currency}</Text>
                <Text className={`${prefixCls}__price-integer`}>{price}</Text>
                {/* .<Text className={`${prefixCls}__price-decimal`}>00</Text> */}
                <Text className={`${prefixCls}__origin-price`}>
                  {currency}
                  {originPrice}
                </Text>
              </View>
              <Text>x{num}</Text>
            </View>
          </View>
        </View>
        {/* footer */}
        <View className={`${prefixCls}__foot`}>{children}</View>
      </View>
    </>
  );
};

Card.defaultProps = {
  currency: '¥',
};

export default Card;
