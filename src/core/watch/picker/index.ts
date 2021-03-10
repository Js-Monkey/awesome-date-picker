import {addWatch} from '../../../observer/watcher'
import Options from '../../../types/options'
import {appendChild} from '../../../utils/element'
import {setPopoverStyle, updatePopover} from '../../dom/updatePopover'
import {createPopover} from "../../dom/create-popover"


const popoverOpt = {
  key: ['options', 'popover'],
  cb(options: Options, pop: HTMLElement): void | HTMLElement {
    if (pop === null) return this.popover = createPopover(this)
    const {insertTo} = this.options
    appendChild(pop, insertTo === 'body' ? undefined : this.reference.parentNode)
    const {zIndex} = options
    setPopoverStyle(pop as HTMLElement, zIndex as number)
  },
  notImmediate: true
}


const popoverVisible = {
  key: ['visible'],
  cb: updatePopover,
  notImmediate: true
}

export function watchComponents(): void {
  addWatch([
    popoverOpt,
    popoverVisible
  ])
}
