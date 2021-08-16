import { View } from '@tarojs/components';
import { Checkbox } from '@/components';
import React, { useState } from 'react';
import './index.scss';

const CheckboxDemo: React.FC = () => {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');

  const [lang, setLang] = useState<string[]>(['1', '3']);
  const clickItem = (value: string[]) => {
    setLang([...value]);
  };
  const onChange = (value: string) => {
    setName(value);
  };
  const changeSchool = (value: string) => {
    setSchool(value);
  };
  return (
    <View className='checkbox-demo'>
      <View className='section'>
        <View className='title'>组合用法</View>
        <Checkbox.Group name='lang' value={lang} onClick={clickItem}>
          <Checkbox value='1'>JAVA</Checkbox>
          <Checkbox value='2'>CSS</Checkbox>
          <Checkbox value='3'>HTML</Checkbox>
          <Checkbox value='4'>REACT</Checkbox>
        </Checkbox.Group>
        <View className='title'>基础用法</View>
        <Checkbox value={name} onClick={onChange} name='person'>
          大人
        </Checkbox>
        <View className='title'>disabled</View>
        <Checkbox value={school} onClick={changeSchool} disabled name='person'>
          大学
        </Checkbox>
      </View>
    </View>
  );
};

export default CheckboxDemo;
