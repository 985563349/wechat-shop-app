import { Button as NativeButton } from '@tarojs/components';
import type { ButtonProps as NativeButtonProps } from '@tarojs/components';
import classNames from 'classnames';

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
}

const prefixCls = 'c-button';

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type, size, block, full, ...fieldProps } = props;

  const classes = classNames(prefixCls, {
    [`${prefixCls}--${size}`]: size,
    [`${prefixCls}--${type}`]: type,
    [`${prefixCls}--block`]: block,
    [`${prefixCls}--full`]: full,
  });

  return (
    <NativeButton className={classes} {...fieldProps}>
      {children}
    </NativeButton>
  );
};

export default Button;
