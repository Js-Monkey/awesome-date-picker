import {Options, OptionsKey} from "../../types/options"
import {isArray, isObject, isString} from "../../utils/type-of"

const  acceptOptions:Options = {
    placement:[
        'top',
        'left',
        'bottom',
        'right'
    ],
    type:['date','date-range'],
    unlinkPanels:[true,false],
    format:(val:any)=>isString(val)
}

const checkLists:OptionsKey[] = ['placement','type','format']


function checkFormat(name:OptionsKey,options:any) {
    let optionVal = acceptOptions[name] as any
    if(isArray(optionVal)){
        return optionVal.indexOf(options[name])===-1
    }else{
        return !optionVal(options[name])
    }
}

function validate(name:OptionsKey,options:any) {
    if(name in options&&checkFormat(name,options)){
        console.error(`Invalid ${name}`)
        return false
    }
    return true
}

export default function validateOptions(options:any):boolean {
    if(isObject(options))return checkLists.every(list => validate(list,options))
    console.error('Invalid argument provided.Options must be an object')
    return false
}
