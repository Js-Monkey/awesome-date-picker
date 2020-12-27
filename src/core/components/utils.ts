import {get, set} from '../../store'
import {getDate, getNextMonth, getPreMonth} from '../../utils/date'
import {State} from '../../types/store'

export function nextYear(state: State): void {
  state.startYear += 1
}

export function preYear(state: State): void {
  state.startYear -= 1
}

export function nextMonth(state: State): void {
  state.startMonth = getNextMonth(state.startMonth, nextYear.bind(null, state))
}

export function preMonth(state: State): void {
  state.startMonth = getPreMonth(state.startMonth, null, preYear.bind(null, state))
}

export function toMonthPage(state: State, idx: number): void {
  state.page = 'month'
  if (idx) state.startYear += idx
}

export function toDayPage(state: State, month: number): void {
  state.startMonth = month
  state.page = 'day'
}

export function toYearPage(state: State): void {
  state.page = 'year'
}

export function selectDate(day: number): void {
  const year = get('startYear')
  const month = get('startMonth')
  set('startDate', getDate(year, month, day))
}
