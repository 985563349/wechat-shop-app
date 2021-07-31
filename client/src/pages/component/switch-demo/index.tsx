import { View } from '@tarojs/components';
import { Switch } from '@/components';

import './index.scss';

const SwitchDemo: React.FC = () => {
  return (
    <View className='switch-demo'>
      <View className='section'>
        <View className='title'>基础用法</View>
        <Switch defaultChecked />
        <Switch type='primary' defaultChecked />
        <Switch type='success' defaultChecked />
        <Switch type='warning' defaultChecked />
        <Switch type='danger' defaultChecked />
      </View>

      <View className='section'>
        <View className='title'>禁用状态</View>
        <Switch type='danger' defaultChecked disabled />
      </View>
    </View>
  );
};

export default SwitchDemo;
