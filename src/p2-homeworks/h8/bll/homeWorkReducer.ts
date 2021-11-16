import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionTypes): UserType[] => { // need to fix any
    switch (action.type) {
        case 'SORT': {
            if (action.payload === 'up') {
                return [...state].sort((a, b) => {
                    return a.name.localeCompare(b.name);
                })
            } else {
                return [...state].sort((a, b) => {
                    return b.name.localeCompare(a.name);
                })
            }
        }
        case 'CHECK': {
            // need to fix
            return state.filter(e => e.age >= 18)
        }
        default: return state
    }
}

type ActionTypes = SortActionType | CheckActionType

type SortActionType = {
    type: 'SORT'
    payload: 'up' | 'down'
}

type CheckActionType = {
    type: 'CHECK'
    payload: number
}