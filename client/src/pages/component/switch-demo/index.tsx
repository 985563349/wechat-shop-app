import { View } from '@tarojs/components';
import { Switch } from '@/components';

import './index.scss';

const SwitchDemo: React.FC = () => {
  return (
    <View className='demo switch-demo'>
      <View className='section'>
        <View className='title'>基础用法</View>
        <Switch />
        <Switch type='primary' />
        <Switch type='success' />
        <Switch type='warning' />
        <Switch type='danger' />
      </View>

      <View className='section'>
        <View className='title'>禁用状态</View>
        <Switch type='danger' disabled />
      </View>
    </View>
  );
};

export default SwitchDemo;
