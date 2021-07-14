import { View } from '@tarojs/components';
import { Button, Icon } from '@/components';

const Component: React.FC = () => {
  return (
    <View>
      <View>
        <View>Button</View>
        <Button disabled>Default</Button>
        <Button size='large'>Large</Button>
        <Button size='small'>Small</Button>
        <Button type='danger'>Danger</Button>
        <Button type='success' loading>
          Success
        </Button>
        <Button type='warning' disabled>
          Warning
        </Button>
      </View>

      <View>
        <View>Icon</View>
        <Icon icon='bell' />
        <Icon icon='bookmark' size='30' />
        <Icon icon='calendar' color='#f40' />
      </View>
    </View>
  );
};

export default Component;
