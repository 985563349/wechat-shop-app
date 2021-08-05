import { Button as NativeButton, View } from '@tarojs/components';
import type { ButtonProps as NativeButtonProps } from '@tarojs/components';
import classNames from 'classnames';

import { getPrefixCls } from '../utils';
import Loading from '../loading';

import './index.scss';

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger';
export type ButtonSize = 'small' | 'large';

export interface ButtonProps extends Omit<NativeButtonProps, 'size' | 'type'> {
  type?: ButtonType;
  size?: ButtonSize;
  block?: boolean;
  full?: boolean;
  circle?: boolean;
  icon?: React.ReactNode;
}

const prefixCls = getPrefixCls('button');

// TODO: 等待后期优化loadingSize跟随font-size变化
const loadingSize = {
  small: 13,
  large: 20,
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type, size, block, full, circle, plain, icon, disabled, loading, ...fieldProps } = props;

  const classes = classNames(prefixCls, {
    [`${prefixCls}--${size}`]: size,
    [`${prefixCls}--${type}`]: type,
    [`${prefixCls}--block`]: block,
    [`${prefixCls}--full`]: full,
    [`${prefixCls}--circle`]: circle,
    [`${prefixCls}--plain`]: plain,
    [`${prefixCls}--loading`]: loading,
    [`${prefixCls}--disabled`]: disabled,
  });

  const iconNode = icon && !loading ? icon : loading ? <Loading size={size ? loadingSize[size] : 0} /> : null;

  return (
    <NativeButton className={classes} disabled={disabled || loading} {...fieldProps}>
      {iconNode}
      {children ? <View className={`${prefixCls}__text`}>{children}</View> : null}
    </NativeButton>
  );
};

export default Button;
