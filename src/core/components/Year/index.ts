import {createElement} from '../../../utils/element'
import {year} from '../../../utils/classes'
import {pageName, State} from '../../../types/store'
import {toMonthPage} from '../utils'
import {getMinInTen} from '../../../utils/date'

export function Year(state: State): Node {
  return createElement(
    {
      children: Array.from({length: 10}).map((_, idx) => {
        return {
          name: 'span',
          event(state: State,e) {
            toMonthPage(state, e.target.innerText)
          },
          text: {
            key: {
              name: 'start',
              childKey: ['year']
            },
            cb(year: number) {
              return String(getMinInTen(year) + idx)
            }
          }
        }
      }),
      class: {
        key: ['page'],
        cb: (page: pageName) => (page === 'year' ? 'show' : 'hidden'),
        static: [year]
      }
    },
    state
  )
}
