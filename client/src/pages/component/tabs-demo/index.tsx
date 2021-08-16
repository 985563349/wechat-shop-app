import { View, ScrollView } from '@tarojs/components';
import { useState } from 'react';
import { Tabs, TabsPane } from '@/components';
import './index.scss';

const DialogDemo: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [current1, setCurrent1] = useState(0);
  const tabList1 = [{ title: '标签11' }, { title: '标签22222' }, { title: '标签322' }, { title: '标签42' }];
  const tabList = [
    { title: '标签11' },
    { title: '标签22222' },
    { title: '标签322' },
    { title: '标签42' },
    { title: '标签11' },
    { title: '标签22222' },
    { title: '标签322' },
    { title: '标签42' },
  ];
  const tabClick = (val: number) => {
    setCurrent(val);
  };
  const tabClick1 = (val: number) => {
    setCurrent1(val);
  };

  return (
    <View className='page'>
      <View className='tabs-demo'>
        <Tabs swipeable tabList={tabList1} current={current1} onClick={tabClick1}>
          <TabsPane index={0} current={current1}>
            <View className='tabcon'>标签1的内容</View>
          </TabsPane>
          <TabsPane index={1} current={current1}>
            <View className='tabcon'>标签2的内容</View>
          </TabsPane>
          <TabsPane index={2} current={current1}>
            <View className='tabcon'>标签3的内容</View>
          </TabsPane>
          <TabsPane index={3} current={current1}>
            <View className='tabcon'>标签4的内容</View>
          </TabsPane>
        </Tabs>
      </View>
      <View className='tabs-demo'>
        <Tabs tabList={tabList} scroll current={current} onClick={tabClick}>
          <TabsPane index={0} current={current}>
            <View className='tabcon'>标签1的内容</View>
          </TabsPane>
          <TabsPane index={1} current={current}>
            <View className='tabcon'>标签2的内容</View>
          </TabsPane>
          <TabsPane index={2} current={current}>
            <View className='tabcon'>标签3的内容</View>
          </TabsPane>
          <TabsPane index={3} current={current}>
            <View className='tabcon'>标签4的内容</View>
          </TabsPane>
          <TabsPane index={4} current={current}>
            <View className='tabcon'>标签5的内容</View>
          </TabsPane>
        </Tabs>
      </View>
    </View>
  );
};

export default DialogDemo;
