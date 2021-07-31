import { View } from '@tarojs/components';
import classNames from 'classnames';

import { getPrefixCls } from '../utils';

import './index.scss';

export interface LoadingProps {
  className?: string;
  size?: string | number;
  color?: string;
}

const prefixCls = getPrefixCls('loading');

const Loading: React.FC<LoadingProps> = (props) => {
  const { className, size, color } = props;

  const classes = classNames(prefixCls, className);

  const sizeStyle = {
    width: size ? `${size}px` : '',
    height: size ? `${size}px` : '',
  };
  const colorStyle = {
    borderColor: color ? `${color} transparent transparent transparent` : '',
  };
  const ringStyle = { ...sizeStyle, ...colorStyle };

  return (
    <View className={classes} style={sizeStyle}>
      <View className={`${prefixCls}__ring`} style={ringStyle}></View>
      <View className={`${prefixCls}__ring`} style={ringStyle}></View>
      <View className={`${prefixCls}__ring`} style={ringStyle}></View>
    </View>
  );
};

export default Loading;
