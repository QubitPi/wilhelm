import {Flashcard} from "react-quizlet-flashcard";
import React from "react";
import "./FlashCard.css"
import {ANCIENT_GREEK, GERMAN, Language, LATIN} from "../../appSlice";

interface FlashCardProps {
  language: Language
  term: string
  definition: string
}

const STYLE_MAPPING = new Map<string, string>([
  [ANCIENT_GREEK, "greek-side"],
  [GERMAN, "german-side"],
  [LATIN, "latin-side"]
]);

export default function FlashCard(props: FlashCardProps) {
  return <Flashcard
      frontHTML={
        <div className="flashcard-text">
          <div className={STYLE_MAPPING.get(props.language)}>{props.term}</div>
        </div>
      }
      backHTML={
        <div className="flashcard-text">
          <div className="english-side">{props.definition}</div>
        </div>
      }
  />
}
