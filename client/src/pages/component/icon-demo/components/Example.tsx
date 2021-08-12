import { View } from '@tarojs/components';
import { Row, Col, Icon } from '@/components';

const Example: React.FC = () => {
  return (
    <View className='example'>
      <View className='section'>
        <View className='title'>基础用法</View>

        <Row>
          <Col span={6}>
            <Icon icon='message' />
          </Col>
          <Col span={6}>
            <Icon icon='user' />
          </Col>
        </Row>
      </View>

      <View className='section'>
        <View className='title'>图标颜色</View>

        <Row>
          <Col span={6}>
            <Icon icon='shopping-cart' color='#f877a0' />
          </Col>

          <Col span={6}>
            <Icon icon='heart' color='#52c3ff' />
          </Col>
        </Row>
      </View>

      <View className='section'>
        <View className='title'>图标大小</View>

        <Row>
          <Col span={6}>
            <Icon size={30} icon='message' />
          </Col>

          <Col span={6}>
            <Icon icon='message' size={40} />
          </Col>
        </Row>
      </View>
    </View>
  );
};

export default Example;
