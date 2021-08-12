import { View } from '@tarojs/components';
import { Cell } from '@/components';

import './index.scss';

const CellDemo: React.FC = () => {
  return (
    <View className='demo cell-demo'>
      <View className='section'>
        <View className='title'>Cell</View>

        <Cell center />

        <Cell.Group title='Cell Group'>
          <Cell center />
          <Cell center />
        </Cell.Group>
      </View>
    </View>
  );
};

export default CellDemo;
