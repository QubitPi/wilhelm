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
import React from 'react';
import './App.css';

import Navigation from "./components/Navigation";
import TopBar from "./components/TopBar";
import {useAppSelector} from "./hooks";
import {selectNavigationExpanded} from "./appSlice";
import FlashCards from "./components/FlashCards";

function App() {
  const toggled = useAppSelector(selectNavigationExpanded)


  return (
      <>
        <div className="container">
          <Navigation />
          <div className={toggled ? "main active" : "main"}>
            <TopBar />
            <FlashCards />
          </div>
        </div>
      </>
  );
}

export default App;
