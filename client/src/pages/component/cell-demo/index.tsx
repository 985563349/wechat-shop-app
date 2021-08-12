import { View } from '@tarojs/components';
import { Cell, Icon } from '@/components';

import './index.scss';

const CellDemo: React.FC = () => {
  return (
    <View className='demo cell-demo'>
      <View className='section'>
        <View className='title'>基础用法</View>

        <View>
          <Cell title='单元格' value='内容' />
          <Cell title='单元格' value='内容' label='描述信息' />
        </View>

        <View className='title'>展示图标</View>
        <View>
          <Cell prefix={<Icon icon='map-pin' />} title='单元格' value='内容' />
        </View>

        <View className='title'>分组标题</View>
        <View>
          <Cell.Group title='分组1'>
            <Cell title='单元格' value='内容' />
          </Cell.Group>

          <Cell.Group title='分组2'>
            <Cell title='单元格' value='内容' />
          </Cell.Group>
        </View>

        <View className='title'>展示箭头</View>
        <View>
          <Cell title='单元格' value='内容' suffix={<Icon icon='chevron-right' />} />
          <Cell title='单元格' value='内容' suffix={<Icon icon='chevron-up' />} />
          <Cell title='单元格' value='内容' suffix={<Icon icon='chevron-down' />} />
        </View>

        <View className='title'>垂直居中</View>
        <View>
          <Cell title='单元格' value='内容' label='描述信息' center />
        </View>
      </View>
    </View>
  );
};

export default CellDemo;
