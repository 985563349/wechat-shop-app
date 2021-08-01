import { View } from '@tarojs/components';
import { useState } from 'react';
import { Overlay, Button } from '@/components';

import './index.scss';

const OverlayDemo: React.FC = () => {
  const [basicShow, setBasicShow] = useState(false);
  return (
    <View className='overlay-demo'>
      <View className='section'>
        <View
          onClick={() => {
            setBasicShow(true);
          }}
        >
          {' '}
          <Button> show Basic Overlay </Button>
        </View>
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
    </View>
  );
};

export default OverlayDemo;
