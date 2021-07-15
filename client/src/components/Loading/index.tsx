import { View } from '@tarojs/components';
import classNames from 'classnames';

import './index.scss';

export interface LoadingProps {
  className?: string;
  size?: string | number;
  color?: string;
}

const Loading: React.FC<LoadingProps> = (props) => {
  const { className, size, color } = props;

  const sizeStyle = {
    width: size ? `${size}px` : '',
    height: size ? `${size}px` : '',
  };

  const colorStyle = {
    borderColor: color ? `${color} transparent transparent transparent` : '',
  };

  const ringStyle = { ...sizeStyle, ...colorStyle };

  const classes = classNames('c-loading', className);

  return (
    <View className={classes} style={sizeStyle}>
      <View className='c-loading__ring' style={ringStyle}></View>
      <View className='c-loading__ring' style={ringStyle}></View>
      <View className='c-loading__ring' style={ringStyle}></View>
    </View>
  );
};

export default Loading;
