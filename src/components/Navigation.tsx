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
