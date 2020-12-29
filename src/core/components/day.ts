import {createElement} from '../../utils/element'
import {day, dayBar, dayContent} from '../../utils/classes'
import {dayBarNames} from '../i18n'
import {getPreMonth, monthFirstDay, daysInAMonth} from '../../utils/date'
import {ComponentStatus, State} from '../../types/store'
import {toggleVisibility} from './utils'

function content(state: State): Node {
  const handleParams = (month: number, year: number) => [monthFirstDay(year, month), daysInAMonth(year, month)]
  return createElement(
    {
      class: [dayContent],
      children: Array.from({length: 42}).map((d, index) => {
        return {
          text: {
            childKey: 'startDayComponent',
            childIdx: index,
            key: ['text'],
            cb(text: string) {
              return text
            }
          },
          class: {
            childKey: 'startDayComponent',
            childIdx: index,
            key: ['status'],
            cb(status: ComponentStatus) {
              return status
            },
            handleParams
          },
          name: 'span'
        }
      })
    },
    state
  )
}

function bar(state: State): Node {
  return createElement(
    {
      class: [dayBar],
      children: dayBarNames.map(name => {
        return {text: name, name: 'span'}
      })
    },
    state
  )
}

export function Day(state: State): Node {
  return createElement(
    {
      children: [bar, content],
      class: {
        key: ['page'],
        cb: toggleVisibility,
        static: [day]
      }
    },
    state
  )
}
