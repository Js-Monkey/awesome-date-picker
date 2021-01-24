import {createElement} from '../../../utils/element'
import {monthNames} from '../../i18n'
import {month} from '../../../utils/classes'
import {toDayPage} from '../utils'
import {State} from '../../../types/store'
import {Bind} from "../../../utils/helper"

export function Month(state: State): Node {
  return createElement(
    {
      children: monthNames.map((item, idx: number) => {
        return {
          name: 'span',
          text: item,
          event: Bind(toDayPage, idx + 1)
        }
      }),
      class: {
        key: ['page'],
        cb: (page) => page === 'month' ? 'show' : 'hidden',
        static: [month]
      }
    },
    state
  )
}
