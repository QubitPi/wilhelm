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
import {selectAboutModalShow, selectNavigationExpanded, setAboutModalShow, setNavigationExpanded} from "../appSlice";

import { ReactComponent as Menu } from "./menu.svg"
import { ReactComponent as About } from "./about.svg"

import "./TopBar.css"

export default function TopBar() {
  const toggled = useAppSelector(selectNavigationExpanded)
  const aboutModalShow = useAppSelector(selectAboutModalShow)

  const dispatch = useAppDispatch()

  const handleToggleClick = () => {
    dispatch(setNavigationExpanded(!toggled))
  }

  return (
      <div className="topbar">
        <div className="toggle" onClick={handleToggleClick}>
          <Menu className="toggle-icon"/>
        </div>

        <div className="about">
          <About className="icon" onClick={() => dispatch(setAboutModalShow(true))}/>
          <div className={aboutModalShow ? "about-modal active" : "about-modal"}>
            <div className={aboutModalShow ? "overlay active" : "overlay"}
                 onClick={() => dispatch(setAboutModalShow(false))}></div>
            <div className={aboutModalShow ? "about-modal-content active" : "about-modal-content"}>
              <h2>About Wilhelm</h2>
              <p>
                All languages are unique, whether it's their fonts, areas of difficulties, or history.
              </p>

              <p>
                Wihelm is a Quizlet alternative to study vocabularies with a much better font visual.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}
