import { View } from '@tarojs/components';
import { Cell, CellGroup } from '@/components';

import './index.scss';

const CellDemo: React.FC = () => {
  return (
    <View className='cell-demo'>
      <View className='section'>
        <View className='title'>Cell</View>

        <Cell center />
        <CellGroup title='Cell Group'>
          <Cell center />
          <Cell center />
        </CellGroup>
      </View>
    </View>
  );
};

export default CellDemo;
