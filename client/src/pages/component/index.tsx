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
          <Navigator className='nav' url='./checkbox-demo/index'>
            Checkbox 复选框
          </Navigator>
          <Navigator className='nav'>Radio 单选框</Navigator>
          <Navigator className='nav' url='./switch-demo/index'>
            Switch 开关
          </Navigator>
        </View>
      </View>

      <View className='section'>
        <View className='section-title'>Action</View>
        <View className='nav-group'>
          <Navigator className='nav' url='./overlay-demo/index'>
            遮罩层
          </Navigator>
        </View>
        <View className='nav-group'>
          <Navigator className='nav' url='./dialog-demo/index'>
            弹框
          </Navigator>
        </View>
        <View className='nav-group'>
          <Navigator className='nav' url='./tabs-demo/index'>
            Tabs
          </Navigator>
        </View>
      </View>
      <View className='section'>
        <View className='section-title'>业务组件</View>
        <View className='nav-group'>
          <Navigator className='nav' url='./card-demo/index'>
            商品card
          </Navigator>
        </View>
      </View>
    </View>
  );
};

export default Component;
