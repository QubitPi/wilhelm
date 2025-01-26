/**
 * Copyright 2025 Jiaqi Liu. All rights reserved.
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
import {
  useAppDispatch,
  useAppSelector,
  selectAboutModalShow,
  selectNavigationExpanded,
  setAboutModalShow,
  setNavigationExpanded,
} from "wilhelm-redux";

import Menu from "./menu.svg";
import Search from "./search.svg";
import About from "./about.svg";

import "./TopBar.css";

export default function TopBar(): JSX.Element {
  const toggled = useAppSelector(selectNavigationExpanded);
  const aboutModalShow = useAppSelector(selectAboutModalShow);

  const dispatch = useAppDispatch();

  const handleToggleClick = (): void => {
    dispatch(setNavigationExpanded(!toggled));
  };

  return (
    <div className="topbar">
      <div className="toggle" onClick={handleToggleClick}>
        <div className="toggle-icon">
          <img src={Menu} alt={"Menu"} />
        </div>
      </div>

      <div className="search">
        <label>
          <input type="text" placeholder="Search here" />
          <div className="icon">
            <img src={Search} alt={"Search"} />
          </div>
        </label>
      </div>

      <div className="about">
        <div className="icon" onClick={() => dispatch(setAboutModalShow(true))}>
          <img src={About} alt={"About"} />
        </div>
        <div className={aboutModalShow ? "about-modal active" : "about-modal"}>
          <div
            className={aboutModalShow ? "overlay active" : "overlay"}
            onClick={() => dispatch(setAboutModalShow(false))}
          ></div>
          <div className={aboutModalShow ? "about-modal-content active" : "about-modal-content"}>
            <h2>About Wilhelm</h2>
            <p>All languages are unique, whether it's their fonts, areas of difficulties, or history.</p>

            <p>Wihelm is a Quizlet alternative to study vocabularies with a much better font visual.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
