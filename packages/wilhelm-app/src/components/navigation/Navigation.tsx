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

import "./Navigation.css";

import Logo from "./logo-white.svg";
import Greek from "./greek.svg";
import German from "./german.svg";
import Latin from "./latin.svg";

import {
  useAppDispatch,
  useAppSelector,
  ANCIENT_GREEK,
  GERMAN,
  type Language,
  LATIN,
  selectHoveredLanguage,
  selectNavigationExpanded,
  setHoveredLanguage,
} from "wilhelm-redux";

export default function Navigation(): JSX.Element {
  const navigationExpanded = useAppSelector(selectNavigationExpanded);
  const hoveredItem = useAppSelector(selectHoveredLanguage);

  const dispatch = useAppDispatch();

  const handleHover = (language: Language): void => {
    dispatch(setHoveredLanguage(language));
  };

  return (
    <div className={navigationExpanded ? "navigation active" : "navigation"}>
      <ul>
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">
            <div className="icon">
              <img src={Logo} alt={"Logo"} />
            </div>
            <span className="title">Wilhelm</span>
          </a>
        </li>
        <li
          className={hoveredItem === ANCIENT_GREEK ? "hovered" : ""}
          onMouseEnter={() => {
            handleHover(ANCIENT_GREEK);
          }}
        >
          {/* eslint-disable-next-line */}
          <a href="#">
            <div className="icon">
              <img src={Greek} alt={"Greek"} />
            </div>
            <span className="title">Ancient Greek</span>
          </a>
        </li>
        <li
          className={hoveredItem === LATIN ? "hovered" : ""}
          onMouseEnter={() => {
            handleHover(LATIN);
          }}
        >
          {/* eslint-disable-next-line */}
          <a href="#">
            <div className="icon">
              <img src={Latin} alt={"Latin"} />
            </div>
            <span className="title">Latin</span>
          </a>
        </li>
        <li
          className={hoveredItem === GERMAN ? "hovered" : ""}
          onMouseEnter={() => {
            handleHover(GERMAN);
          }}
        >
          {/* eslint-disable-next-line */}
          <a href="#">
            <div className="icon">
              <img src={German} alt={"German"} />
            </div>
            <span className="title">German</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
