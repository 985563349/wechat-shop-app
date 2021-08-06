import { createContext, CSSProperties } from 'react';
import { View } from '@tarojs/components';
import classNames from 'classnames';

import { getPrefixCls } from '../utils';

import './index.scss';

export interface RowProps {
  getter?: number;
}

const prefixCls = getPrefixCls('row');

export const rowContext = createContext<{ getter?: number }>({});

const Row: React.FC<RowProps> = (props) => {
  const { getter, children } = props;

  const classes = classNames(prefixCls);

  const styles: CSSProperties = {};

  if (getter) {
    styles.marginLeft = getter / -2;
    styles.marginRight = getter / -2;
    styles.rowGap = 0;
  }

  const providerValues = { getter };

  return (
    <View className={classes} style={styles}>
      <rowContext.Provider value={providerValues}>{children}</rowContext.Provider>
    </View>
  );
};

export default Row;
