import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "./store";

export const GERMAN = "German"
export const ANCIENT_GREEK = "Ancient Greek"
export const LATIN = "Latin"

export type Language = typeof GERMAN | typeof ANCIENT_GREEK | typeof LATIN;


interface AppState {
  navigationExpanded: boolean,
  hoveredLanguage: Language,
  aboutModalShow: boolean
}

const initialState: AppState = {
  navigationExpanded: true,
  hoveredLanguage: ANCIENT_GREEK,
  aboutModalShow: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNavigationExpanded: (state, action: PayloadAction<boolean>) => { state.navigationExpanded = action.payload },
    setHoveredLanguage: (state, action: PayloadAction<Language>) => { state.hoveredLanguage = action.payload },
    setAboutModalShow: (state, action: PayloadAction<boolean>) => { state.aboutModalShow = action.payload }
  }
})

export const { setNavigationExpanded, setHoveredLanguage, setAboutModalShow } = appSlice.actions

export const selectNavigationExpanded = (state: RootState) => state.app.navigationExpanded
export const selectHoveredLanguage = (state: RootState) => state.app.hoveredLanguage
export const selectAboutModalShow = (state: RootState) => state.app.aboutModalShow

export default appSlice.reducer
