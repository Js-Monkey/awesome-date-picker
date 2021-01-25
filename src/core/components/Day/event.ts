import {DayComponents, RangeStatus, State} from "../../../types/store"
import {DayEvent, HeaderType, RangeClickEvent} from "../../../types/components"

const rangeClickEvent: RangeClickEvent = {
  complete: {
    plt: 'start',
    status: 'selecting'
  },
  selecting: {
    plt: 'end',
    status: 'complete'
  }
}

export function dayEvent(index: number, type: HeaderType): DayEvent {
  function filterState(state: State): DayComponents {
    return state[type].components[index]
  }

  return {
    date() {
      this.start.date = filterState(this).date
      this.visible = false
    },
    'date-range': [
      {
        name: 'click',
        handler() {
          const {range} = this
          const current = rangeClickEvent[range.status as RangeStatus]
          range.status = current.status
          range[current.plt] = filterState(this).date
        }
      },
      {
        name: 'mouseenter',
        handler() {
          const {range} = this
          if (range.status === 'selecting') {
            range.end = filterState(this).date
          }
        }
      }
    ]
  }
}
