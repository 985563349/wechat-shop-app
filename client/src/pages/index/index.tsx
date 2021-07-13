import { useEffect, useState } from 'react';
import Taro, { useDidHide, useDidShow, usePullDownRefresh, useReady } from '@tarojs/taro';
import { Button, Form, Input, Text, View } from '@tarojs/components';

import './index.scss';

const Index: React.FC = () => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [state, setState] = useState({ area: 0, circum: 0 });

  const computed = () => {
    Taro.cloud
      .callFunction({
        name: 'rectangle',
        data: { width: Number(width), height: Number(width) },
      })
      .then(({ result }) => setState(result as any))
      .catch((e) => {
        console.log(e);
      });
  };

  // 可以使用所有的React Hooks
  useEffect(() => {});

  // 对应onReady
  useReady(() => {});

  // 对应onShow
  useDidShow(() => {});

  // 对应onHide
  useDidHide(() => {});

  // 对应onPullDownRefresh
  usePullDownRefresh(() => {});

  return (
    <View className='index'>
      <View className='title'>Index Page</View>

      <Form className='form'>
        <View className='form-item'>
          <Text className='form-item__label'>Width: </Text>
          <Input
            className='input'
            value={width}
            onInput={(e) => setWidth(e.detail.value)}
            placeholder='Please enter the width'
          />
        </View>

        <View className='form-item'>
          <Text className='form-item__label'>Height: </Text>
          <Input
            className='input'
            value={height}
            onInput={(e) => setHeight(e.detail.value)}
            placeholder='Please enter the height'
          />
        </View>

        <Button className='button' size='mini' onClick={computed}>
          Computed
        </Button>

        <View>
          area: {state.area} circum: {state.circum}
        </View>
      </Form>
    </View>
  );
};

export default Index;
