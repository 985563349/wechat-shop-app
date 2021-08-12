import { View } from '@tarojs/components';
import { Button, Icon } from '@/components';

import './index.scss';

const ButtonDemo: React.FC = () => {
  return (
    <View className='demo button-demo'>
      <View className='section'>
        <View className='title'>按钮类型</View>

        <Button>Default</Button>
        <Button type='primary'>Primary</Button>
        <Button type='danger'>Danger</Button>
        <Button type='success'>Success</Button>
        <Button type='warning'>Warning</Button>
      </View>

      <View className='section'>
        <View className='title'>禁用状态</View>

        <Button type='danger' disabled>
          Danger
        </Button>
      </View>

      <View className='section'>
        <View className='title'>图标按钮</View>

        <Button type='danger' icon={<Icon icon='add' />}>
          Add
        </Button>
      </View>

      <View className='section'>
        <View className='title'>圆角按钮</View>

        <Button type='danger' icon={<Icon icon='add' />} circle></Button>
        <Button type='danger' icon={<Icon icon='download' />} circle>
          Download
        </Button>
      </View>

      <View className='section'>
        <View className='title'>镂空按钮</View>

        <Button icon={<Icon icon='add' />} circle plain></Button>
        <Button type='danger' icon={<Icon icon='add' />} circle plain disabled></Button>
      </View>

      <View className='section'>
        <View className='title'>Loading</View>

        <Button loading size='small'>
          Loading
        </Button>
      </View>

      <View className='section'>
        <View className='title'>按钮尺寸</View>

        <Button size='small'>small</Button>
        <Button type='danger'>Default</Button>
        <Button size='large' type='success'>
          Large
        </Button>
      </View>

      <View className='section'>
        <View className='title'>块级元素</View>

        <Button block>Block</Button>
      </View>

      <View className='section'>
        <View className='title'>通栏样式</View>

        <Button full type='primary'>
          Full
        </Button>
      </View>
    </View>
  );
};

export default ButtonDemo;
