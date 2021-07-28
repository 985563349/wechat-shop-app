import { View } from '@tarojs/components';

import './index.scss';

export interface CellGroupProps {
  title?: string;
}

const CellGroup: React.FC<CellGroupProps> = (props) => {
  const { title, children } = props;
  return (
    <View className='c-cell-group'>
      {title ? <View className='c-cell-group__title'>{title}</View> : null}
      {children}
    </View>
  );
};
export default CellGroup;
