import { View } from '@tarojs/components';
import { Button } from '@/components';

const Component: React.FC = () => {
  return (
    <View>
      <View>
        <View>Button</View>
        <Button>Default</Button>
        <Button size='large'>Large</Button>
        <Button size='small'>Small</Button>
      </View>
    </View>
  );
};

export default Component;
