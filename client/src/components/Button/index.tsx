import { Button as NativeButton } from '@tarojs/components';
import type { ButtonProps as NativeButtonProps } from '@tarojs/components';

export interface ButtonProps extends NativeButtonProps {}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...fieldProps } = props;

  return <NativeButton {...fieldProps}>{children}</NativeButton>;
};

export default Button;
