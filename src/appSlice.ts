/**
 * Copyright Jiaqi Liu
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
  navigationExpanded: false,
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
