import { isAxiosError } from "axios"
import { AppDispatch } from "../../app/store"
import { setAppErrorAC } from "../../app/app-reducer"

export const handleError = (error: unknown, dispatch: AppDispatch) => {
  let errorMessage: string

  if(isAxiosError<ServerError>(error)) {
    errorMessage = error.response ? error.response.data.errorMessages[0].message : error.message
  } else {
    errorMessage = (error as Error).message
  }

  dispatch(setAppErrorAC(errorMessage))
}


// type error Axios
type ServerError = {
  errorMessages: Array<{field: string, message: string}>
}