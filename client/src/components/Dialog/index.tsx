import { View } from '@tarojs/components';
import React from 'react';
import { render } from 'react-dom';
import { Overlay, Button } from '../index';
// import classNames from 'classnames';
import { getPrefixCls } from '../utils';
import './index.scss';

export interface DialogProps {
  title?: string;
  width?: string;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  content?: string;
  visible?: boolean;
}

const confirm = (props: DialogProps) => {
  let DialogView = document.createElement('view');
  DialogView.id = 'confirmView';
  document.body.appendChild(DialogView);
  render(<Dialog {...props} />, DialogView);
};

const prefixCls = getPrefixCls('dialog');
const Dialog: React.FC<DialogProps> & {
  confirm: typeof confirm;
} = (props) => {
  const { title, content, visible, children, cancelText, confirmText, onCancel, onConfirm } = props;

  return (
    <Overlay show={visible}>
      <View className={`${prefixCls}__model`}>
        <View className={`${prefixCls}__title`}>
          {title && <View> {title}</View>}
          <View className={`${prefixCls}__content`}>
            {content ? <View dangerouslySetInnerHTML={{ __html: content }}></View> : children}
          </View>
          <View className={`${prefixCls}__footer`}>
            <Button
              onClick={() => {
                onCancel?.();
              }}
              className={`${prefixCls}__button ${prefixCls}__button--cancel`}
            >
              {cancelText}
            </Button>
            <Button
              onClick={() => {
                onConfirm?.();
              }}
              type='success'
              className={`${prefixCls}__button ${prefixCls}__button--confirm`}
            >
              {confirmText}
            </Button>
          </View>
        </View>
      </View>
    </Overlay>
  );
};

Dialog.defaultProps = {
  title: '提示',
  visible: false,
  width: '70%',
  cancelText: '取消',
  confirmText: '确定',
};
Dialog.confirm = confirm;

export default Dialog;
