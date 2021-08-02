import { View, Navigator } from '@tarojs/components';

import './index.scss';

const Component: React.FC = () => {
  return (
    <View className='component'>
      <View className='desc'>UI组件库</View>

      <View className='section'>
        <View className='section-title'>基础组件</View>

        <View className='nav-group'>
          <Navigator className='nav' url='./button-demo/index'>
            Button 按钮
          </Navigator>
          <Navigator className='nav' url='./cell-demo/index'>
            Cell 单元格
          </Navigator>
          <Navigator className='nav' url='./icon-demo/index'>
            Icon 图标
          </Navigator>
        </View>
      </View>

      <View className='section'>
        <View className='section-title'>表单组件</View>

        <View className='nav-group'>
          <Navigator className='nav'>Checkbox 复选框</Navigator>
          <Navigator className='nav'>Radio 单选框</Navigator>
          <Navigator className='nav' url='./switch-demo/index'>
            Switch 开关
          </Navigator>
        </View>
      </View>

      <View className='section'>
        <View className='section-title'>交互组件</View>

        <View className='nav-group'>
          <Navigator className='nav'>ActionSheet 动作面板</Navigator>
          <Navigator className='nav'>Loading 加载</Navigator>
          <Navigator className='nav'>Overlay 遮罩层</Navigator>
          <Navigator className='nav'>Notify 消息提示</Navigator>
          <Navigator className='nav'>Dialog 弹出框</Navigator>
        </View>
      </View>

      <View className='section'>
        <View className='section-title'>导航组件</View>

        <View className='nav-group'>
          <Navigator className='nav'>Grid 宫格组件</Navigator>
          <Navigator className='nav'>Sidebar 侧边导航</Navigator>
          <Navigator className='nav'>Tab 标签页</Navigator>
          <Navigator className='nav'>Tabbar 导航栏</Navigator>
        </View>
      </View>
    </View>
  );
};

export default Component;
