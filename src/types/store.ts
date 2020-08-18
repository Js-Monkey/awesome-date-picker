import Options from './options'

type componentWatcher = (target: stateComponent, key: keyof componentsWatchers, value: unknown) => void
type dateWatcher = (target: stateDate, key: keyof dateWatchers, value: unknown) => void
type utilWatcher = (target: stateUtil, key: keyof utilWatchers, value: unknown) => void

export interface stateComponent {
  reference?: null | HTMLElement
}

export interface stateDate<T = Date> {
  startDate?: T
}

export interface stateUtil {
  options?: Options
}

export interface componentsWatchers<T = componentWatcher> {
  reference: T
}

export interface dateWatchers<T = dateWatcher> {
  startDate: T
}

export interface utilWatchers<T = utilWatcher> {
  options: T
}

export interface State extends stateComponent, stateDate, stateUtil {
  components: stateComponent
  utils: stateUtil
  date: stateDate
}

export type Store = State[]
