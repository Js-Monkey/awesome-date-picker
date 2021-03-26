export type Placement = 'top' | 'left' | 'bottom' | 'right'

export interface MonthType<T = unknown, U = unknown> {
  date: T
  month: T
  'month-range': T | U
}

export interface DateType<T = unknown, U = unknown> {
  date: T
  'date-range': T | U
}

export interface DatepickerType<T = unknown, U = any> extends DateType, MonthType {
  date: T
  'date-range': T | U
  month: T
  'month-range': T | U
}

export default interface Options {
  placement: Placement
  type: keyof DatepickerType
  unlinkPanels: boolean
  offset: number
  zIndex: number
  format: string
  insertTo: 'body' | 'parent'
  binding: boolean
  disabledDate?: ((date: Date) => boolean) | null
  disabled: boolean
}

export interface AcceptOptions<T = (val: unknown) => boolean> {
  placement: Placement[]
  type: (keyof DatepickerType)[]
  unlinkPanels: T
  offset: T
  zIndex: T
  format: T
  binding: T
  insertTo: ('body' | 'parent')[]
  disabledDate: (date: Date) => boolean
  disabled: T
}
