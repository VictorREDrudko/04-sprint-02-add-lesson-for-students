export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'SET_APP_STATUS': 
      return {...state, status: action.status}

    case 'SET_APP_ERROR': 
      return {...state, error: action.error}

    default:
      return state
  }
}

export const setAppStatusAC = (status: RequestStatusType) => {
  return ({
    type: 'SET_APP_STATUS' as const,
    status
  })
}

export const setAppErrorAC = (error: string | null) => {
  return ({
    type: 'SET_APP_ERROR' as const,
    error
  })
}

type SetAppStatus = ReturnType<typeof setAppStatusAC>
type SetAppErrorAC = ReturnType<typeof setAppErrorAC>

type ActionsType = SetAppStatus | SetAppErrorAC
