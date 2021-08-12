import { useState } from 'react';
import { View } from '@tarojs/components';

import Example from './components/Example';
import Base from './components/Base';
import All from './components/All';

import './index.scss';

type ActiveType = 'example' | 'base' | 'all';

const tabs = [
  {
    title: '用法示例',
    key: 'example',
  },
  {
    title: '基础图标',
    key: 'base',
  },
  {
    title: '全部图标',
    key: 'all',
  },
] as const;

const IconDemo = () => {
  const [active, setActive] = useState<ActiveType>('all');

  return (
    <View className='icon-demo'>
      <View className='tabs'>
        <View className='tabs-nav'>
          {tabs.map(({ title, key }) => (
            <View
              className={['tab', active === key ? 'tab--active' : ''].join(' ')}
              key={title}
              onClick={() => setActive(key)}
            >
              {title}
            </View>
          ))}
        </View>

        <View className='tabs-content'>
          <View className='tab-pane' style={{ display: active === 'example' ? 'block' : 'none' }}>
            <Example />
          </View>

          <View className='tab-pane' style={{ display: active === 'base' ? 'block' : 'none' }}>
            <Base />
          </View>

          <View className='tab-pane' style={{ display: active === 'all' ? 'block' : 'none' }}>
            <All />
          </View>
        </View>
      </View>
    </View>
  );
};

export default IconDemo;
