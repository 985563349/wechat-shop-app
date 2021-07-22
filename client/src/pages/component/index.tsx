import { View } from '@tarojs/components';
import { Button, Cell, CellGroup, Icon } from '@/components';

import './index.scss';

const Component: React.FC = () => {
  return (
    <View className='component'>
      <View className='section'>
        <View className='title'>Button</View>

        <View className='section-item'>
          <View className='sub-title'>按钮类型</View>
          <Button>Default</Button>
          <Button type='danger'>Danger</Button>
          <Button type='dark'>Dark</Button>
          <Button type='light'>Light</Button>
          <Button type='medium'>Medium</Button>
          <Button type='primary'>Primary</Button>
          <Button type='secondary'>Secondary</Button>
          <Button type='success'>Success</Button>
          <Button type='tertiary'>Tertiary</Button>
          <Button type='warning'>Warning</Button>
        </View>

        <View className='section-item'>
          <View className='sub-title'>禁用状态</View>
          <Button type='danger' disabled>
            Danger
          </Button>
          <Button type='dark' disabled>
            Dark
          </Button>
        </View>

        <View className='section-item'>
          <View className='sub-title'>按钮尺寸</View>
          <Button size='small'>small</Button>
          <Button>Default</Button>
          <Button size='large'>Large</Button>
        </View>

        <View className='section-item'>
          <View className='sub-title'>块级元素</View>
          <Button block>Block</Button>
        </View>

        <View className='section-item'>
          <View className='sub-title'>FULL</View>
          <Button full>Full</Button>
        </View>
      </View>

      <View className='section'>
        <View className='title'>Icon</View>

        <View className='section-item'>
          <View className='sub-title'>基础用法</View>
          <Icon icon='add-circle' />
          <Icon icon='check-circle' />
          <Icon icon='close-circle' />
        </View>

        <View className='section-item'>
          <View className='sub-title'>图标颜色</View>
          <Icon icon='heart' color='#eb445a' />
          <Icon icon='star-2' color='#3880ff' />
        </View>

        <View className='section-item'>
          <View className='sub-title'>图标大小</View>
          <Icon icon='heart' size='30' />
          <Icon icon='star-2' size='40' />
        </View>
      </View>

      <View className='section'>
        <View className='title'>Cell</View>

        <View className='section-item'>
          <Cell center />

          <CellGroup title='Cell Group'>
            <Cell center />
            <Cell center />
          </CellGroup>
        </View>
      </View>
    </View>
  );
};

export default Component;
