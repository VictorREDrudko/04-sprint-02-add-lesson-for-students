import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../store'
import { selectApperror } from '../app-selectors'
import { setAppErrorAC } from '../app-reducer'

export const GlobalError = () => {
  const errorMessage = useAppSelector(selectApperror)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(setAppErrorAC(null))
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />
}
