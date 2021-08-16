import { View } from '@tarojs/components';
import { useState } from 'react';
import { Dialog, Button } from '@/components';
import './index.scss';

const DialogDemo: React.FC = () => {
  const [basicShow, setBasicShow] = useState(false);
  const [basicShow2, setBasicShow2] = useState(false);
  const dialogConfig = {
    title: '定位分享',
    cancelText: '返回',
    content: '<p>这是一段content\r\n这是第二段的表达</p>',
    onCancel: () => {
      setBasicShow(false);
    },
    onConfirm: () => {
      setBasicShow(false);
    },
  };
  const showBasicDialog = () => {
    setBasicShow(true);
  };

  const dialogConfig2 = {
    title: '定位分享',
    cancelText: '返回',
    onCancel: () => {
      setBasicShow2(false);
    },
    onConfirm: () => {
      setBasicShow2(false);
    },
  };
  const showBasicDialog2 = () => {
    setBasicShow2(true);
  };

  return (
    <View className={`${basicShow ? 'page-hidden' : 'page'}`}>
      <View className='dialog-demo'>
        <Button onClick={showBasicDialog}>基础弹框</Button>
      </View>
      <Dialog {...dialogConfig} visible={basicShow} />

      <View className='dialog-demo'>
        <Button onClick={showBasicDialog2}>自定义基础弹框</Button>
      </View>
      <Dialog {...dialogConfig2} visible={basicShow2}>
        这是组件自定义的内容
      </Dialog>
    </View>
  );
};

export default DialogDemo;
