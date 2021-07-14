import { View } from '@tarojs/components';
import classNames from 'classnames';

import './index.scss';

export interface IconProps {
  icon: string;
  className?: string;
  size?: string | number;
  color?: string;
}

const Icon: React.FC<IconProps> = (props) => {
  const { className, icon, size, color } = props;

  const classes = classNames('c-icon', [
    {
      [`c-icon-${icon}`]: icon,
    },
    className,
  ]);

  const styles = {
    fontSize: size ? `${size}px` : '',
    color,
  };

  return <View className={classes} style={styles}></View>;
};

export default Icon;
