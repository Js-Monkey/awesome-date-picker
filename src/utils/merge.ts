import {isArray, isObject} from './typeOf'
import {UtilObject} from '../types/utils'

export default function deepMerge(...objs: UtilObject[]): UtilObject {
  const target = Object.create(null)
  objs.forEach(source => {
    if (isObject(source)) {
      Object.keys(source).forEach(key => {
        const sourceVal = source[key]
        const targetVal = target[key]
        target[key] = isObject(sourceVal) ? deepMerge(sourceVal, targetVal) : sourceVal
      })
    }
  })
  return target
}

export function mergeOptions(source: UtilObject, target?: UtilObject): UtilObject {
  const mergeOpt: UtilObject = deepMerge(Object.create(null), source)
  if (target) {
    for (const key in target) {
      if (typeof target[key] !== 'undefined') {
        mergeOpt[key] = target[key]
      }
    }
  }
  return mergeOpt
}

export function mergeClasses(...args: (string | string[] | undefined)[]): string {
  return args.reduce((classes: string, arg) => {
    if (!arg) return classes
    return classes + ' ' + (isArray(arg) ? arg.join(' ') : arg)
  }, '')
}
