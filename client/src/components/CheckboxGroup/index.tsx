import React, { createContext } from 'react';

export interface CheckboxGroupTypes {
  name?: string;
  value: (string | number)[];
  disabled?: boolean;
  onClick?: (value: (string | number)[]) => void;
}
export const CheckboxGroupContext = createContext<
  (Omit<CheckboxGroupTypes, 'onClick'> & { _onClick: (value: (string | number)[]) => void }) | null
>(null);
export const CheckboxGroup: React.FC<CheckboxGroupTypes> = (props) => {
  const { name, value, disabled, children, onClick } = props;
  const values = {
    name,
    value: value,
    disabled,
    _onClick: (val: (string | number)[]) => {
      onClick?.(val);
    },
  };
  return (
    <div className='c-checkbox-group'>
      <CheckboxGroupContext.Provider value={values}>{children}</CheckboxGroupContext.Provider>
    </div>
  );
};
