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
import React, {useEffect, useState} from 'react';
import './App.css';

import Navigation from "./components/Navigation";
import TopBar from "./components/TopBar";
import {useAppSelector} from "./hooks";
import {selectHoveredLanguage, selectNavigationExpanded} from "./appSlice";
import FlashCard from "./components/flashcard";
import {expand, getVocabulariesByLanguage} from "./components/Webservice";
import GraphBrowser from "./components/graph";


function App() {
  const navigationExpanded = useAppSelector(selectNavigationExpanded)

  const [vocabulary, setVocabulary] = useState<{ term: string; definition: string }[]>([])
  const [displayedIndex, setDisplayedIndex] = useState<number>(0)
  const [displayedGraph, setDisplayedGraph] = useState({
    nodes: [],
    links: []
  })

  const language = useAppSelector(selectHoveredLanguage)

  useEffect(() => {
    getVocabulariesByLanguage(language).then(termToDefs => {
      const currentVocabulary: { term: string; definition: string }[] = []
      termToDefs.forEach((definition: string, term: string) => {
        currentVocabulary.push({
          term: term,
          definition: definition
        })
      })
      setVocabulary(currentVocabulary)
    })
  }, [language])

  useEffect(() => {
    if (vocabulary.length <= 0) {
      return
    }

    expand(vocabulary[displayedIndex]["term"]).then(graph => {
      setDisplayedGraph({
        nodes: (graph.get("nodes") as any[]).map(node => {return {
          id: node.id,
          elementId: node.id,
          labels: node.language ? ["Term"] : ["Definition"],
          properties: {
            name: node.name
          },
          propertyTypes: {
            name: "string"
          }
        }}) as [],
        links: (graph.get("links") as any[]).map(link => {return {
          id: link.sourceNodeId + link.targetNodeId,
          elementId: link.sourceNodeId + link.targetNodeId,
          startNodeId: link.sourceNodeId,
          endNodeId: link.targetNodeId,
          type: link.name,
          properties: {},
          propertyTypes: {}
        }}) as []
      })
    })
  }, [vocabulary, displayedIndex]);


  return (
      <>
        <div className="container">
          <Navigation/>
          <div className={navigationExpanded ? "main active" : "main"}>
            <TopBar/>

            <div className="flashcards">
              {
                  displayedIndex > 0 &&
                  <div className="vocArrow prev" onClick={() => setDisplayedIndex(displayedIndex - 1)}>
                    <div></div>
                  </div>
              }
              {
                  vocabulary.length > 0 &&
                  <FlashCard
                      language={language}
                      term={vocabulary[displayedIndex]["term"]}
                      definition={vocabulary[displayedIndex]["definition"]}
                  />
              }
              {
                  displayedIndex < vocabulary.length - 1 &&
                  <div className="vocArrow next" onClick={() => {
                    setDisplayedIndex(displayedIndex + 1)
                  }}>
                    <div></div>
                  </div>
              }
            </div>

            <div className="graph-browser">
              {
                vocabulary.length > 0 &&
                  <GraphBrowser nodes={displayedGraph.nodes} links={displayedGraph.links}/>
              }
            </div>
          </div>
        </div>
      </>
  );
}

export default App;
