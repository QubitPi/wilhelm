/**
 * Copyright QubitPi
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
import React, { useState} from 'react';
import { FlashcardArray } from "react-quizlet-flashcard";
import './App.css';
import { ReactComponent as Logo } from "./logo-white.svg"
import { ReactComponent as Greek } from "./greek.svg"
import { ReactComponent as German } from "./german.svg"
import { ReactComponent as Menu } from "./menu.svg"
import { ReactComponent as Search } from "./search.svg"
import { ReactComponent as About } from "./about.svg"

import ancientGreekKeyboard from "./ancient-greek-keyboard.png"
import lsg from "./lsj.png"
import wiktionary from "./wiktionary.png"
import atticGreekCover from "./atticgreekcover.png"
import reddit from "./reddit.png"

import greekVocabulary from "./vocabulary";
import germanVocabulary from "./german"

const GERMAN = "german"
const ANCIENT_GREEK = "ancient-greek"

function App() {
  const [toggled, setToggled] = useState<boolean>(false)
  const [hoveredItem, setHoveredItem] = useState<string>(ANCIENT_GREEK)
  const [vocabulary, setVocabulary] = useState(greekVocabulary)


  const handleToggleClick = () => {
    setToggled(!toggled)
  }

  const handleHover = (language: string) => {
    setHoveredItem(language)

    if (language === ANCIENT_GREEK) {
      setVocabulary(greekVocabulary)
    }

    if (language === GERMAN) {
      setVocabulary(germanVocabulary)
    }
  }

  return (
      <>
        <div className="container">
          <div className={toggled ? "navigation active" : "navigation"}>
            <ul>
              <li>
                {/*eslint-disable-next-line*/}
                <a href="#">
                  <Logo className="icon"/>
                  <span className="title">Wilhelm</span>
                </a>
              </li>
              <li className={hoveredItem === ANCIENT_GREEK ? "hovered" : ""} onMouseEnter={() => handleHover(ANCIENT_GREEK)}>
                {/*eslint-disable-next-line*/}
                <a href="#">
                  <Greek className="icon"/>
                  <span className="title">Ancient Greek</span>
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

          <div className={toggled ? "main active" : "main"}>
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
                <About className="icon"/>
              </div>
            </div>

            <div className="flash-card">
              <FlashcardArray cards={vocabulary}/>
            </div>

            <div className="details">
              <div className="wordList">
                <div className="listHeader">
                  <h2>Word List</h2>
                  {/*eslint-disable-next-line*/}
                  <a href="#" className="btn">View All</a>
                </div>

                <table>
                  <thead>
                    <tr>
                      <td>Word</td>
                      <td>Definition</td>
                      <td>Status</td>
                    </tr>
                  </thead>

                  <tbody>
                    {vocabulary.map(item => (
                        <tr>
                          <td>{item.frontHTML}</td>
                          <td>{item.backHTML}</td>
                          <td><span className="status mastered">Mastered</span></td>
                        </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="languageResources">
                <div className="listHeader">
                  <h2>Language Resources</h2>
                </div>

                <table>
                  <tr>
                    <td width="60px">
                      <a href="https://en.wiktionary.org/wiki/ὑπολαμβάνω">
                        <div className="imgBx">
                          <img src={wiktionary} alt="Wiktionary logo"/>
                        </div>
                      </a>
                    </td>
                    <td>
                      <a href="https://en.wiktionary.org/wiki/ὑπολαμβάνω">
                        <h4>Ancient Greek Dictionary (Wikitionary)</h4>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td width="60px">
                      <a href="https://lsj.gr/wiki/LSJ:Learn_Greek">
                        <div className="imgBx">
                          <img src={lsg} alt="LSG logo"/>
                        </div>
                      </a>
                    </td>
                    <td>
                      <a href="https://lsj.gr/wiki/LSJ:Learn_Greek">
                        <h4>Resources on Learning Ancient Greek from LSJ</h4>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td width="60px">
                      <a href="https://lsj.gr/wiki/ὑπολαμβάνω">
                        <div className="imgBx">
                          <img src={lsg} alt="LSG logo"/>
                        </div>
                      </a>
                    </td>
                    <td>
                      <a href="https://lsj.gr/wiki/ὑπολαμβάνω">
                        <h4>Ancient Greek Dictionary (LSJ)</h4>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td width="60px">
                      <a href="https://www.reddit.com/r/AncientGreek/wiki/resources/">
                        <div className="imgBx">
                          <img src={reddit} alt="cover"/>
                        </div>
                      </a>
                    </td>
                    <td>
                      <a href="https://www.reddit.com/r/AncientGreek/wiki/resources/">
                        <h4>Ancient Greek Language resources on Reddit</h4>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td width="60px">
                      <a href="http://atticgreek.org/pronunc/pronunc_guide.html">
                        <div className="imgBx">
                          <img src={atticGreekCover} alt="cover"/>
                        </div>
                      </a>
                    </td>
                    <td>
                      <a href="http://atticgreek.org/pronunc/pronunc_guide.html">
                        <h4>Alphabet pronunciation</h4>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td width="60px">
                      <div className="imgBx">
                        <a href={ancientGreekKeyboard}><img src={ancientGreekKeyboard} alt=""/></a>
                      </div>
                    </td>
                    <td>
                      <h4>Ancient Greek keyboard mapping on Mac <br/> <span>PNG</span></h4>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default App;
