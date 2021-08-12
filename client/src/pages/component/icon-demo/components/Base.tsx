import { View, Text } from '@tarojs/components';
import { Col, Row, Icon } from '@/components';

const icons = [
  'chevron-right',
  'chevron-left',
  'chevron-up',
  'chevron-down',
  'check',
  'close',
  'add',
  'subtract',
  'search',
  'alert-circle',
];

const Base: React.FC = () => {
  return (
    <View className='base'>
      <Row>
        {icons.map((icon) => (
          <Col span={8} key={icon}>
            <Icon icon={icon} />
            <Text>{icon}</Text>
          </Col>
        ))}
      </Row>
    </View>
  );
};

export default Base;
