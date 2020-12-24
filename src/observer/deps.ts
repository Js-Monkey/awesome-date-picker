import {Sub, Watcher} from '../types/observer'
import {State} from '../types/store'

let uid = 0

export function updateView(sub: Sub, state: State): void {
  const params = sub.name.map(name => state[name]).concat([state])
  sub.cb(...params)
}

export default class Dep {
  static target: any
  id: number
  subs: any[]
  state: State

  constructor(state: State) {
    this.id = uid++
    this.subs = []
    this.state = state
  }

  addSub(sub: Sub): void {
    this.subs.push(sub)
  }

  depend(): void {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify(): void {
    this.subs.forEach(sub => {
      updateView(sub.watcher, this.state)
    })
  }
}

Dep.target = null

export function setTarget(target: Watcher): void {
  Dep.target = target
}

export function clearTarget(): void {
  Dep.target = null
}
