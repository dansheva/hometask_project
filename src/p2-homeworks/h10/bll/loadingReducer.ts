const initState = false

export const loadingReducer = (state = initState, action: loadingActionType): boolean => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return action.loading
        }
        default:
            return state
    }
}


type loadingActionType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean) => ({
        type: 'SET-LOADING',
        loading
    } as const
)