import {Style, UtilObject} from '../types/utils'
import {isObject} from './typeOf'

export function resetAttr(el: HTMLElement | Element, val: string, name = 'class'): void {
  if (!val) return el.removeAttribute(name)
  el.setAttribute(name, val)
}

export function transformStyle(sty: Style): string {
  return Object.keys(sty)
    .reduce((acc, key) => acc.concat(`${key}:${sty[key as never]}`), [] as string[])
    .join(';')
}

export function addAttr(el: HTMLElement | Element, val: string | UtilObject, name = 'class'): void {
  let attr = el.getAttribute(name) || ''
  if (isObject(val)) {
    val = Object.keys(val).reduce((c, key) => c + key + ':' + val[key as keyof void] + ';', '')
  }
  attr += ' ' + val
  el.setAttribute(name, attr)
}
