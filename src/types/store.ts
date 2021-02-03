import Options, {DatepickerType} from './options'

type componentWatcher = (target: stateComponent, key: keyof componentsWatchers, value: unknown) => void
type dateWatcher = (target: stateDate, key: keyof dateWatchers, value: unknown) => void
type utilWatcher = (target: stateUtil, key: keyof utilWatchers, value: unknown) => void

export type ComponentStatus =
  'other'
  | 'pre'
  | 'next'
  | 'selected'
  | 'inRange'
  | 'range-start'
  | 'range-end'
  | ''
  | 'range-start range-end'
  | 'today'

export interface DayComponents {
  text: string
  status: ComponentStatus
  date: string
}

export interface stateComponent<T = null | HTMLElement> {
  reference: T
  popover: T
}

export interface DateData {
  date: string | null
  year: number
  month: number
  components: DayComponents[]
}

export type RangeStatus = 'complete' | 'selecting'

export interface Range {
  start: string | null
  end: string | null
  status: RangeStatus
}

export interface stateDate<T = Date> {
  range: Range
  start: DateData
  end: DateData
  today: string
}

export type pageName = 'day' | 'year' | 'month'

export interface stateUtil {
  options: Options
  visible: boolean
  page: pageName
}

export interface componentsWatchers<T = componentWatcher> {
  reference: T
  popover: T
}

export interface dateWatchers<T = dateWatcher> {
  startDate: T
}

export interface utilWatchers<T = utilWatcher> {
  options: T
  visible: T
  page: T
}

export interface State extends stateComponent, stateUtil, stateDate {
  type: keyof DatepickerType
}
