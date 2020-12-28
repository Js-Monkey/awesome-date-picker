import Options from '../types/options'
import validateOptions from './validator/options'
import defaultOptions from './default-options'
import {findInputElement} from '../utils/findInputElement'
import {isInputElement} from './validator/input-element'
import {createState, set} from '../store'
import {mergeOptions} from '../utils/merge'
import {watch} from './watch'

export default class better {
  options: Options
  static el: HTMLInputElement

  constructor(el: HTMLInputElement, options?: Options) {
    this.options = mergeOptions(new defaultOptions(), options) as Options
    better.create(el, this.options)
  }

  static create(el: HTMLInputElement, options: Options): void {
    const input = findInputElement(el)
    if (!isInputElement(input) || !validateOptions(options)) return
    createState()
    console.log(1)
    watch()
    set('reference', input)
  }
}
