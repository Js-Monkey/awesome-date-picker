import {State} from './store'
import {CreateElement, CreateElementOptions} from './utils'
import {EventListener} from "./utils"
import {DatepickerType, DateType} from "./options"

export type HeaderType = 'start' | 'end'


export interface UpdateCbType {
  text: (res: string)=> void
  cls: (res: string)=> void
  sty: (res: boolean)=> void
}

export type Components = (state: State, ...arg: any) => Node

export type PopoverType = DatepickerType<(CreateElementOptions | CreateElement)[]>

export type DayEvent = DateType<(this: State) => void, EventListener[]>

export interface RangeClickEvent {
  complete: {
    plt: HeaderType
    status: 'selecting'
  }
  selecting: {
    plt: HeaderType
    status: 'complete'
  }
}
