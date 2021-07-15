import { Button as NativeButton, View } from '@tarojs/components';
import type { ButtonProps as NativeButtonProps } from '@tarojs/components';
import classNames from 'classnames';

import Loading from '../Loading';

import './index.scss';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'medium'
  | 'light';
export type ButtonSize = 'small' | 'large';
export interface ButtonProps extends Omit<NativeButtonProps, 'size' | 'type'> {
  type?: ButtonType;
  size?: ButtonSize;
  block?: boolean;
  full?: boolean;
  circle?: boolean;
  icon?: React.ReactNode;
}

const prefixCls = 'c-button';

// FIXME: 等待后期优化loadingSize跟随font-size变化
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
      {children ? <View className='c-button__text'>{children}</View> : null}
    </NativeButton>
  );
};

export default Button;
