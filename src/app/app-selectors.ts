import { AppRootState } from "./store";

export const selectAppStatus = (state: AppRootState) => state.app.status
export const selectApperror = (state: AppRootState) => state.app.error