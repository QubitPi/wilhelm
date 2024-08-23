import React from "react";
import {useAppDispatch, useAppSelector} from "../hooks";
import {selectAboutModalShow, selectNavigationExpanded, setAboutModalShow, setNavigationExpanded} from "../appSlice";

import { ReactComponent as Menu } from "./menu.svg"
import { ReactComponent as Search } from "./search.svg"
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

        <div className="search">
          <label>
            <input type="text" placeholder="Search here"/>
            <Search className="icon"/>
          </label>
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
