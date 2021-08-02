import { View } from '@tarojs/components';
import { Checkbox, CheckboxGroup } from '@/components';
import React, { useState, ReactText } from 'react';
import './index.scss';

const CheckboxDemo: React.FC = () => {
  const [type, setType] = useState('');
  const [name, setName] = useState('');

  const [cities, setCity] = useState<string[]>(['1']);
  const clickItem = (value: string[]) => {
    setCity([...value]);
    // setType(value)
    // setType(value)
  };
  const onChange = (value: string) => {
    setName(value);
  };
  return (
    <View className='checkbox-demo'>
      <View className='section'>
        <View className='title'>基础用法</View>
        <CheckboxGroup name='lang' value={cities} onClick={clickItem}>
          <Checkbox value='1'>JAVA</Checkbox>
          <Checkbox value='2'>CSS</Checkbox>
          <Checkbox value='3'>HTML</Checkbox>
          <Checkbox value='4'>REACT</Checkbox>
        </CheckboxGroup>
        {/* </Checkbox.Group> */}
        <Checkbox value={name} onClick={onChange} name='person'>
          大人
        </Checkbox>
      </View>
    </View>
  );
};

export default CheckboxDemo;
