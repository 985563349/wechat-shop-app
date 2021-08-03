import { View, Text } from '@tarojs/components';
import React, { createContext, useState } from 'react';
import { createPortal } from 'react-dom';

// import classNames from 'classnames';

import { getPrefixCls } from '../utils';

export interface DialogTypes {
  title: string;
  customClass?: string;
  visible: boolean;
  message: string;
  children?: React.ReactNode;
  confirm: any;
}
const confirm = () => {
  const dom = <View> dom 元素</View>;
  return createPortal(dom, document.body);
};

const prefixCls = getPrefixCls('cell');
const Dialog: React.FC<DialogTypes> = (props) => {
  const { title, customClass, visible, children } = props;
  // const classes = classNames(prefixCls, {
  //   [`${prefixCls}--center`]: center,
  // });
  return (
    <View>
      <View className={`${prefixCls}__title`}>
        {title && <View> {title}</View>}
        <View className='content'>{children}</View>
      </View>
    </View>
  );
};

Dialog.defaultProps = {
  title: '提示',
  visible: false,
};
Dialog.confirm = confirm;

export default Dialog;

// class Dialog extends Component<DialogTypes> {
//   static alert(){

//   }
//   constructor(props:DialogTypes){
//     super(props)
//     this.state = {}
//   }

//   render() {
//     return (
//        <View>wee</View>
//     );
//   }
// }
