import {addWatch} from '../../../observer/watcher'
import {State} from '../../../types/store'
import {on} from '../../../utils/event'
import clickOutside from '../../../utils/clickoutside'
import {listenToScrollParents} from '../../../utils/listenToParents'
import {set} from '../../../store'
import {createPopover} from '../../dom/create-popover'
import Options from '../../../types/options'
import {isInBody} from '../../../utils/isInBody'
import {appendChild} from '../../../utils/element'
import {setPopoverStyle, updatePopover} from '../../dom/updatePopover'
import {Bind} from "../../../utils/bind"

const reference = {
  key: ['reference'],
  cb(ref: HTMLElement, state: State): void {
    on(ref, () => (state.visible = true))
    on(document.body, Bind(clickOutside, state))
    listenToScrollParents(ref, state)
    set('popover', createPopover(state))
  },
  notImmediate: true
}

const popoverOpt = {
  key: ['popover', 'options'],
  cb(pop: HTMLElement, options: Options): void {
    if (!isInBody(pop)) {
      appendChild(pop as Element)
      const {zIndex} = options
      setPopoverStyle(pop as HTMLElement, zIndex as number)
    }
  },
  notImmediate: true
}


const popoverVisible = {
  key: ['popover', 'visible'],
  cb: updatePopover,
  notImmediate: true
}

export function watchComponents(): void {
  addWatch([
    reference,
    popoverOpt,
    popoverVisible
  ])
}
