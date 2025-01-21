import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setAppStatusAC } from '../../app/app-reducer.ts'
import { isAxiosError } from 'axios'
import { handleError } from '../../common/utils/handle-error.ts'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'))

  try {
    const res = await decksAPI.fetchDecks()
    dispatch(setDecksAC(res.data.items))
    dispatch(setAppStatusAC('succeeded'))
  }

  catch (error) {
    dispatch(setAppStatusAC('failed'))
  }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

// Ошибки
// 1. ошибка backend создает axios (res.data.messages)
// 2. network error axios создает объект ошибки (e.message)
// 3. синхронные ошибки (нативная ошибка javaScript), имеет поле message

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  try {
    // throw new Error('Booom!!!')
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
  }

  catch (error) {
    handleError(error, dispatch)
  }
}

