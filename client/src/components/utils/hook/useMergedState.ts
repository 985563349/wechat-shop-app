import { useEffect, useRef, useState } from 'react';

export default function useMergedState<T>(
  defaultStateValue: T | (() => T),
  options?: {
    defaultValue?: T | (() => T);
    value?: T;
  }
): [T, (value: T) => void] {
  const { defaultValue, value } = options ?? {};

  const [innerValue, setInnerValue] = useState<T>(() => {
    if (value !== undefined) {
      return value;
    }

    if (defaultValue !== undefined) {
      return typeof defaultValue === 'function' ? (defaultValue as any)() : defaultValue;
    }

    return typeof defaultStateValue === 'function' ? (defaultStateValue as any)() : defaultStateValue;
  });

  const mergedValue = value !== undefined ? value : innerValue;

  function triggerChange(newValue: T) {
    setInnerValue(newValue);
  }

  // 同步value
  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (value === undefined) {
      setInnerValue(value as any);
    }
  }, [value]);

  return [mergedValue, triggerChange];
}
