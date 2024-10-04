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
