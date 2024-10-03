import {Flashcard} from "react-quizlet-flashcard";
import React, {useEffect, useState} from "react";
import {useAppSelector} from "../../hooks";
import {ANCIENT_GREEK, GERMAN, LATIN, selectHoveredLanguage} from "../../appSlice";
import { JSX } from "react/jsx-runtime";
import {getVocabulariesByLanguage} from "../Webservice";
import "./FlashCards.css"

const STYLE_MAPPING = new Map<string, string>([
  [ANCIENT_GREEK, "greek-side"],
  [GERMAN, "german-side"],
  [LATIN, "latin-side"]
]);

export default function FlashCards() {
  const [vocabulary, setVocabulary] = useState<{ id: number; frontHTML: JSX.Element; backHTML: JSX.Element; }[]>([])
  const [displayedIndex, setDisplayedIndex] = useState<number>(0)

  const language = useAppSelector(selectHoveredLanguage)

  useEffect(() => {
    getVocabulariesByLanguage(language).then(termToDefs => {
      const currentVocabulary: { id: number; frontHTML: JSX.Element; backHTML: JSX.Element; }[] = []
      let idx = 1
      termToDefs.forEach((definition: string, term: string) => {
        currentVocabulary.push({
          id: idx,
          frontHTML: <div className="flashcard-text">
            <div className={STYLE_MAPPING.get(language)}>{term}</div>
          </div>,
          backHTML: <div className="flashcard-text">
            <div className="english-side">{definition}</div>
          </div>
        })
        idx++;
      })
      setVocabulary(currentVocabulary)
    })
  }, [language])

  useEffect(() => {
    // intentionally left blank
  }, [displayedIndex]);

  return <>
    <div className="flashcards">
      {
          displayedIndex > 0 &&
          <div className="vocArrow prev" onClick={() => setDisplayedIndex(displayedIndex - 1)}>
            <div></div>
          </div>
      }
      {
          vocabulary.length > 0 &&
            <Flashcard frontHTML={vocabulary[displayedIndex]["frontHTML"]}
                       backHTML={vocabulary[displayedIndex]["backHTML"]}/>
      }
      {
          displayedIndex < vocabulary.length - 1 &&
          <div className="vocArrow next" onClick={() => {setDisplayedIndex(displayedIndex + 1)}}>
            <div></div>
          </div>
      }
    </div>
  </>
}
