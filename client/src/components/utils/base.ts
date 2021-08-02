// 组件class名默认前缀
export const defaultPrefixCls = 'c';

export const getPrefixCls = (suffixCls?: string) => {
  return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : suffixCls;
};
