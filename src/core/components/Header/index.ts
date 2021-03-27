import {HeaderType} from '../../../types/components'
import {createElement, visible} from '../../../utils/element'
import {nextMonth, nextYear, preMonth, preYear, isDayPage, toMonthPage, toYearPage} from '../utils'
import {pageName, State} from '../../../types/store'
import {getMinInTen} from '../../../utils/date'
import {CreateElementOptions} from '../../../types/utils'
import {Bind} from "../../../utils/bind"
import {Sub} from "../../../types/observer"
import {monthNames} from "../../util/i18n"
import has from "../../../utils/has"

let name: HeaderType = 'start'

const togglePage = {
  display:{
    key: ['page'],
    cb: isDayPage
  }
}

function yearRange(state: State) {
  const range = (year: number) => {
    const min = getMinInTen(year)
    const max = min + 9
    return min + ' - ' + max
  }
  return createElement(
    {
      name: 'span',
      text: {
        key: {
          name: 'start',
          childKey: ['year', '_day']
        },
        cb: (year: number) => range(year)
      },
      $style: {
        display:{
          key: ['page'],
          cb: (page: pageName) => visible(page === 'year')
        }
      },
      event: toYearPage
    },
    state
  )
}

function year(state: State) {
  return createElement({
    name: 'span',
    text: {
      key: {
        name,
        childKey: ['year', '_day']
      },
      cb: year => year
    },
    event: toYearPage,
    class: ['pointerCursor'],
    $style:{
      display:{
        key: ['page'],
        cb: (page: pageName) => visible(page !== 'year')
      }
    }
  }, state)
}

function month(state: State) {
  return createElement({
    name: 'span',
    text: {
      key: {
        name,
        childKey: ['month']
      },
      cb: idx => monthNames[idx - 1]
    },
    class: ['pointerCursor'],
    event: toMonthPage,
    $style: togglePage
  }, state)
}

function date(state: State) {
  const showMonth: Sub<string> = {
    key: {
      name,
      childKey: ['year']
    },
    cb: (year) => year
  }

  const showDate: Sub<string> = {
    key: {
      name,
      childKey: ['month', 'year']
    },
    cb: (idx, year) => monthNames[idx - 1] + ' ' + year
  }
  const isMonth = has(state.options.type, 'month')
  return createElement({
    name: 'span',
    text: isMonth ? showMonth : showDate
  }, state)
}

function preYearIcon(state: State) {
  return createElement(
    {
      name: 'svg',
      text: 'year',
      style: {
        position: 'absolute',
        left: '30px',
        width: '14px',
        height: '14px',
      },
      event: preYear
    },
    state
  )
}

function preMonthIcon(state: State) {
  return createElement(
    {
      name: 'svg',
      text: 'month',
      style: {
        position: 'absolute',
        left: '50px',
        width: '14px',
        height: '14px',
      },
      event: preMonth,
      $style: togglePage
    },
    state
  )
}

function nextYearIcon(state: State) {
  const opt: CreateElementOptions = {
    name: 'svg',
    text: 'year',
    style: {
      position: 'absolute',
      right: '30px',
      transform: 'rotate(180deg)',
      width: '14px',
      height: '14px',
    },
    event: Bind(nextYear, name)
  }
  return createElement(opt, state)
}

function nextMonthIcon(state: State) {
  return createElement(
    {
      name: 'svg',
      text: 'month',
      style: {
        position: 'absolute',
        right: '50px',
        transform: 'rotate(180deg)',
        width: '14px',
        height: '14px',
      },
      event: Bind(nextMonth, name),
      $style: togglePage
    },
    state
  )
}

const headerChildren = {
  start: [preYearIcon, preMonthIcon, date],
  main: [preYearIcon, preMonthIcon, yearRange, month, year, nextYearIcon, nextMonthIcon],
  end: [date, nextYearIcon, nextMonthIcon]
}

export function Header(state: State, t?: HeaderType): Node {
  const opt = {
    class: ['header'],
    children: headerChildren[t || 'main'],
    style: {
      width: '298px',
      'text-align': 'center'
    }
  }
  name = t || 'start'
  return createElement(opt, state)
}

export function HeaderLeft(state: State): Node {
  return Header(state, 'start')
}

export function HeaderRight(state: State): Node {
  return Header(state, 'end')
}
