import { View } from '@tarojs/components';
import { Col, Row } from '@/components';

import './index.scss';

const LayoutDemo: React.FC = () => {
  return (
    <View className='demo layout-demo'>
      <View className='section'>
        <View className='title'>基础用法</View>

        <Row>
          <Col span={8}>span: 8</Col>
          <Col span={8}>span: 8</Col>
          <Col span={8}>span: 8</Col>
        </Row>

        <Row getter={12}>
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
        </Row>
      </View>

      <View className='section'>
        <View className='title'>Offset</View>
        <Row>
          <Col span={8}>span: 8</Col>
          <Col span={8} offset={8}>
            span: 8
          </Col>
        </Row>

        <Row>
          <Col span={6} offset={6}>
            span: 6
          </Col>
          <Col span={6} offset={6}>
            span: 6
          </Col>
        </Row>

        <Row>
          <Col span={12} offset={6}>
            span: 12
          </Col>
        </Row>
      </View>
    </View>
  );
};

export default LayoutDemo;
