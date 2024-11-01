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
import {ANCIENT_GREEK, GERMAN, Language, LATIN} from "../appSlice";

const WEBSERVICE_URL = process.env.REACT_APP_GATEWAY_URL as string

export async function getCountByLanguage(languge: Language): Promise<number> {
  const LANGUAGES = new Map<string, string>([
    [GERMAN, "/wilhelm/languages/german/count"],
    [ANCIENT_GREEK, "/wilhelm/languages/ancientGreek/count"],
    [LATIN, "/wilhelm/languages/latin/count"]
  ])

  let count = 0

  const url = new URL(LANGUAGES.get(languge) as string, WEBSERVICE_URL)
  await fetch(url)
      .then(response => response.json())
      .then(data => {
        count = data[0]["count"]
      })

  return count
}

/**
 * An abstract layer that reads one vocabulary from Neo4J database.
 *
 * @param languge  One of {@link Language} enum values
 * @param index  The vocabulary index stored in database. If index is more than the number of vocabularies, this method
 * will throw an error
 */
export async function getVocabulariesByLanguage(languge: Language, index: number): Promise<{ term: string; definition: string }> {
  const LANGUAGES = new Map<string, string>([
      [GERMAN, "/wilhelm/languages/german"],
      [ANCIENT_GREEK, "/wilhelm/languages/ancientGreek"],
      [LATIN, "/wilhelm/languages/latin"]
  ])

  const vocabulary: { term: string; definition: string } = {
    term: "",
    definition: ""
  }

  const url = new URL(LANGUAGES.get(languge) as string, WEBSERVICE_URL)
  url.searchParams.append("perPage", "1")
  url.searchParams.append("page", String(index))
  await fetch(url)
      .then(response => response.json())
      .then(data => {
        vocabulary.term = data[0]["term"]
        vocabulary.definition = data[0]["definition"]
      })

  return vocabulary
}

export async function expand(term: string): Promise<Map<string, Array<any>>> {
  const graph = new Map<string, Array<any>>()
  graph.set("nodes", [])
  graph.set("links", [])

  await fetch(new URL("wilhelm/expand/" + urlEncode(term), WEBSERVICE_URL))
      .then(response => response.json())
      .then(data => {
        for (let node of data["nodes"]) {
          graph.get("nodes")?.push(node)
        }
        for (let link of data["links"]) {
          graph.get("links")?.push(link)
        }
      })

  return graph
}

export function urlEncode(term: string): string {
  return encodeURIComponent(term)
}
