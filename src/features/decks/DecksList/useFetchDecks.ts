import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { selectDecks } from '../decks-selectors.ts'
import { useEffect, useState } from 'react'
import { fetchDecksTC } from '../decks-thunks.ts'

export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)

  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    setIsloading(true)
    dispatch(fetchDecksTC()).finally(() => setIsloading(false))
  }, [dispatch])

  return {
    decks,
    isLoading
  }
}
