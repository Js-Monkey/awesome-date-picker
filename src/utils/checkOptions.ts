import Options, {AcceptOptions} from '../types/options'
import {isArray, isBoolean, isFunc, isNumber, isString} from './typeOf'

const acceptOptions: AcceptOptions = {
  placement: ['top', 'left', 'bottom', 'right'],
  type: ['date', 'date-range', 'month', 'month-range'],
  unlinkPanels: (val: unknown) => isBoolean(val),
  format: (val: unknown) => isString(val),
  zIndex: (val: unknown) => isNumber(val),
  disabled: (val: unknown) => isBoolean(val),
  disabledDate: (val: unknown) => isFunc(val),
  offset: (val: unknown) => isNumber(val),
  insertTo: ['body', 'parent'],
  binding: (val: unknown) => isBoolean(val)
}

export function checkOptions(key: keyof Options, val: unknown): boolean {
  const optionVal = acceptOptions[key] as any
  if (isArray(optionVal)) {
    return optionVal.indexOf(val) > -1
  } else {
    return optionVal(val)
  }
}
