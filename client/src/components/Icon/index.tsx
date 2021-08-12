import { View } from '@tarojs/components';
import classNames from 'classnames';

import { getPrefixCls } from '../utils';

import './index.scss';

export interface IconProps {
  icon: string;
  className?: string;
  size?: string | number;
  color?: string;
}

const prefixCls = getPrefixCls('icon');

const Icon: React.FC<IconProps> = (props) => {
  const { className, icon, size, color } = props;

  const classes = classNames(prefixCls, [
    {
      [`${prefixCls}-${icon}`]: icon,
    },
    className,
  ]);

  const styles = {
    fontSize: size ? `${size}px` : '',
    color,
  };

  return <View className={classes} style={styles}></View>;
};

Icon.defaultProps = {
  size: 24,
};

export default Icon;
