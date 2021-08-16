import { View } from '@tarojs/components';
import { useState } from 'react';
import { Overlay, Button } from '@/components';
import './index.scss';

const OverlayDemo: React.FC = () => {
  const [basicShow, setBasicShow] = useState(false);
  return (
    <View className={`${basicShow ? 'page-hidden' : 'page'}`}>
      <View className='overlay-demo'>
        <View className='section'>
          <Button
            onClick={() => {
              setBasicShow(true);
            }}
          >
            {' '}
            show Basic Overlay{' '}
          </Button>
          <Overlay
            show={basicShow}
            className='custom-overlay'
            onClick={() => {
              setBasicShow(false);
            }}
          >
            <View className='mylife'>生活</View>
          </Overlay>
        </View>
        <View style='height:1000px'>滚动距离</View>
      </View>
    </View>
  );
};

export default OverlayDemo;
