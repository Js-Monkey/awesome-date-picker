import {placement, datepickerType} from "../types/options"

class InitOptionsByDate{
    placement:placement
    type:datepickerType
    zIndex:number
    unlinkPanels:boolean
    format:string
    constructor() {
        this.placement = 'bottom'
        this.type = 'date'
        this.zIndex = 2000
        this.unlinkPanels = false
        this.format = 'yyyy/MM/dd'
    }
}



export default InitOptionsByDate
