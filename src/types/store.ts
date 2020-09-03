import Options from './options'

type componentWatcher = (target: stateComponent, key: keyof componentsWatchers, value: unknown) => void
type dateWatcher = (target: stateDate, key: keyof dateWatchers, value: unknown) => void
type utilWatcher = (target: stateUtil, key: keyof utilWatchers, value: unknown) => void

export interface stateComponent<T = null | HTMLElement> {
  reference: T
  popover: T
}

export interface stateDate<T = Date> {
  startDate?: T
}

export interface stateUtil<T = Options> {
  options?: T
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
}

export interface State {
  components: stateComponent
  utils: stateUtil
  date: stateDate
}

export interface WatchersFn<T> {
  (target: T, key: keyof T, value: unknown, receiver: StateExtends): void
}

export type componentsWatcherFn = stateComponent<WatchersFn<stateComponent>>

export type utilsWatcherFn = stateUtil<WatchersFn<stateUtil>>

export type dateWatcherFn = stateDate<WatchersFn<stateDate>>

export interface Watchers {
  components: componentsWatcherFn
  utils: utilsWatcherFn
  date: dateWatcherFn
}

export interface StateExtends extends State, componentsWatchers, dateWatcher, utilWatcher {}

export type Store = State[]
