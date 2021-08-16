import { View } from '@tarojs/components';
import { Card, Button } from '@/components';
import './index.scss';

const OverlayDemo: React.FC = () => {
  const commodityConfig = {
    title:
      '钻石手表钻石手表钻石手表钻石手表钻石手表钻石手表钻石手表钻石手表钻石手表钻石手表钻石手表钻石手表钻石手表钻石手表钻石手表钻石手表钻石手表钻石手表钻石手  ',
    num: '10',
    price: '12.03',
    desc: '手表信息手表信息手表信息手表信息手表信息手表信息手表信息',
    originPrice: '12,000',
    thumb: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
  };
  return (
    <View className='card-demo'>
      <View className='section'>
        <Card {...commodityConfig}>
          <Button size='small'> 购买</Button>
        </Card>
      </View>
    </View>
  );
};

export default OverlayDemo;
