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
import React from "react";
import {useAppDispatch, useAppSelector} from "../hooks";

import "./Navigation.css"

import { ReactComponent as Logo } from "./logo-white.svg"
import { ReactComponent as Greek } from "./greek.svg"
import { ReactComponent as German } from "./german.svg"
import { ReactComponent as Latin } from "./latin.svg"

import {
  ANCIENT_GREEK, GERMAN,
  Language, LATIN,
  selectHoveredLanguage,
  selectNavigationExpanded,
  setHoveredLanguage,
} from "../appSlice";

export default function Navigation() {
  const navigationExpanded = useAppSelector(selectNavigationExpanded)
  const hoveredItem = useAppSelector(selectHoveredLanguage)

  const dispatch = useAppDispatch()

  const handleHover = (language: Language) => {
    dispatch(setHoveredLanguage(language))
  }

  return (
      <div className={navigationExpanded ? "navigation active" : "navigation"}>
        <ul>
          <li>
            {/*eslint-disable-next-line*/}
            <a href="#">
              <Logo className="icon"/>
              <span className="title">Wilhelm</span>
            </a>
          </li>
          <li className={hoveredItem === ANCIENT_GREEK ? "hovered" : ""}
              onMouseEnter={() => handleHover(ANCIENT_GREEK)}>
            {/*eslint-disable-next-line*/}
            <a href="#">
              <Greek className="icon"/>
              <span className="title">Ancient Greek</span>
            </a>
          </li>
          <li className={hoveredItem === LATIN ? "hovered" : ""}
              onMouseEnter={() => handleHover(LATIN)}>
            {/*eslint-disable-next-line*/}
            <a href="#">
              <Latin className="icon"/>
              <span className="title">Latin</span>
            </a>
          </li>
          <li className={hoveredItem === GERMAN ? "hovered" : ""} onMouseEnter={() => handleHover(GERMAN)}>
            {/*eslint-disable-next-line*/}
            <a href="#">
              <German className="icon"/>
              <span className="title">German</span>
            </a>
          </li>
        </ul>
      </div>
  )
}
