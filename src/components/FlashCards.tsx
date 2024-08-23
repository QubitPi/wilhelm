import {FlashcardArray} from "react-quizlet-flashcard";
import React, {useEffect, useState} from "react";
import {useAppSelector} from "../hooks";
import {ANCIENT_GREEK, GERMAN, LATIN, selectHoveredLanguage} from "../appSlice";
import { JSX } from "react/jsx-runtime";
import {getVocabulariesByLanguage} from "./Webservice";

const STYLE_MAPPING = new Map<string, string>([
  [ANCIENT_GREEK, "greek-side"],
  [GERMAN, "german-side"],
  [LATIN, "latin-side"]
]);

export default function FlashCards() {
  const [vocabulary, setVocabulary] = useState<{ id: number; frontHTML: JSX.Element; backHTML: JSX.Element; }[]>([])

  const language = useAppSelector(selectHoveredLanguage)

  useEffect(() => {
    getVocabulariesByLanguage(language).then(termToDefs => {
      const currentVocabulary: { id: number; frontHTML: JSX.Element; backHTML: JSX.Element; }[] = []
      let idx = 1
      termToDefs.forEach((definition: string, term: string) => {
        currentVocabulary.push({
          id: idx,
          frontHTML: <div className={STYLE_MAPPING.get(language)}>{term}</div>,
          backHTML: <div className="english-side">{definition}</div>
        })
        idx++;
      })
      setVocabulary(currentVocabulary)
    })
  }, [language])

  return (
      <div className="flash-card">
        <FlashcardArray cards={vocabulary}/>
      </div>
  )
}
