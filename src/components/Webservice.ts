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

/**
 * An abstract layer that reads vocabulary data from Neo4J database.
 *
 * @param languge  One of {@link Language} enum values
 */
export async function getVocabulariesByLanguage(languge: Language): Promise<Map<string, string>> {
  const LANGUAGES = new Map<string, string>([
      [GERMAN, "/wilhelm/languages/german"],
      [ANCIENT_GREEK, "/wilhelm/languages/ancientGreek"],
      [LATIN, "/wilhelm/languages/latin"]
  ])

  const vocabulary = new Map<string, string>()

  const url = new URL(LANGUAGES.get(languge) as string, WEBSERVICE_URL)
  url.searchParams.append("perPage", "10000")
  url.searchParams.append("page", "1")
  await fetch(url)
      .then(response => response.json())
      .then(data => {
        for (let item of data) {
          vocabulary.set(item["term"], item["definition"])
        }
      })

  return vocabulary
}

export async function expand(term: string): Promise<Map<string, Array<any>>> {
  const graph = new Map<string, Array<any>>()
  graph.set("nodes", [])
  graph.set("links", [])

  await fetch(new URL("wilhelm/expand/" + term, WEBSERVICE_URL))
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
