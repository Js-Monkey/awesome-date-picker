import {Sub} from './observer'

export interface UtilObject {
  [key: string]: any
}

export interface Fn {
  (...arg: any): any
}

export interface Types {
  Number: string
  String: string
  Function: string
  Array: string
  Date: string
  Object: string
  Boolean: string
}

export interface Rect<T = number> {
  width: T
  height: T
  left: T
  top: T
}

export interface Transform<T = string> {
  top: T
  left: T
  bottom: T
  right: T
}

export type eventType = 'click' | 'mouseenter' | 'mouseleave' | 'focus'

export type eventHandler = (...arg: any) => unknown

export interface EventListener {
  name: eventType
  handler: eventHandler
}

export interface EventListenerHasArguments {
  arg: any
  listener: eventHandler | EventListener[]
}

export interface Style {
  height?: string
  width?: string
  float?: 'left' | 'right'
  color?: string
  backgroundColor?: string
  margin?: string
  'margin-left'?: string
  'margin-right'?: string
  'margin-top'?: string
  'margin-bottom'?: string
  padding?: string
  position?: 'relative' | 'absolute'
  left?: string
  right?: string
  top?: string
  bottom?: string
  cursor?: 'default' | 'pointer'
  transform?: string
  'text-align'?: string
  display?: 'inline-block' | 'none' | 'block'
  'border-right'?: string
}

export interface CreateElement {
  (...arg: any): Node
}

export interface updateOptions<T = string> extends Sub<T> {
  static?: string[]
}

export interface CreateElementOptions {
  name?: 'span' | 'div' | 'ul' | 'li' | 'input' | 'svg' | 'table' | 'tr' | 'th' | 'td' | 'thead' | 'tbody' | 'i'
  text?: string | Sub<string>
  class?: updateOptions | string[]
  event?: eventHandler | EventListener[] | EventListenerHasArguments
  style?: Style
  children?: (CreateElementOptions | CreateElement)[]
  visible?: updateOptions<boolean>
}

interface HandlerCb {
  (): void
}

export interface Handler<> {
  name: () => void
  text: HandlerCb
  class: HandlerCb
  event: HandlerCb
  style: HandlerCb
  children: HandlerCb
  visible: HandlerCb
}
