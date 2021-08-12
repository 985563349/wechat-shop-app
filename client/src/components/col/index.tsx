import { CSSProperties, useContext } from 'react';
import { View } from '@tarojs/components';
import classNames from 'classnames';

import { getPrefixCls } from '../utils';
import { rowContext } from '../Row';

import './index.scss';

export interface ColProps {
  span?: number;
  offset?: number;
}

const prefixCls = getPrefixCls('col');

const Col: React.FC<ColProps> = (props) => {
  const { span, offset, children } = props;

  const { getter } = useContext(rowContext);

  const classes = classNames(prefixCls, {
    [`${prefixCls}-${span}`]: span,
    [`${prefixCls}-offset-${offset}`]: offset,
  });

  const styles: CSSProperties = {};

  if (getter) {
    const horizontalGutter = getter / 2;
    styles.paddingLeft = horizontalGutter;
    styles.paddingRight = horizontalGutter;
  }

  return (
    <View className={classes} style={styles}>
      {children}
    </View>
  );
};

export default Col;
