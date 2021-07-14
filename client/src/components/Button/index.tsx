import { Button as NativeButton } from '@tarojs/components';
import type { ButtonProps as NativeButtonProps } from '@tarojs/components';
import classNames from 'classnames';

import IconLoading from '../IconLoading';

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
  icon?: React.ReactNode;
}

const prefixCls = 'c-button';

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type, size, block, full, icon, disabled, loading, ...fieldProps } = props;

  const classes = classNames(prefixCls, {
    [`${prefixCls}--${size}`]: size,
    [`${prefixCls}--${type}`]: type,
    [`${prefixCls}--block`]: block,
    [`${prefixCls}--full`]: full,
    [`${prefixCls}--loading`]: loading,
    [`${prefixCls}--disabled`]: disabled,
  });

  const iconNode = icon && !loading ? icon : loading ? <IconLoading /> : null;

  return (
    <NativeButton className={classes} disabled={disabled || loading} {...fieldProps}>
      {iconNode}
      {children}
    </NativeButton>
  );
};

export default Button;
