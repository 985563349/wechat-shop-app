import { View } from '@tarojs/components';
import { Icon } from '@/components';

import './index.scss';

const IconDemo = () => {
  return (
    <View className='icon-demo'>
      <View className='section'>
        <View className='title'>基础用法</View>

        <Icon icon='add-circle' />
        <Icon icon='check-circle' />
        <Icon icon='close-circle' />
      </View>

      <View className='section'>
        <View className='title'>图标颜色</View>

        <Icon icon='heart' color='#eb445a' />
        <Icon icon='star-2' color='#3880ff' />
      </View>

      <View className='section'>
        <View className='title'>图标大小</View>

        <Icon icon='heart' size='30' />
        <Icon icon='star-2' size='40' />
      </View>
    </View>
  );
};

export default IconDemo;
