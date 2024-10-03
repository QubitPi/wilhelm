import {ANCIENT_GREEK, GERMAN, Language, LATIN} from "../appSlice";

/**
 * An abstract layer that reads vocabulary data from Neo4J database.
 *
 * @param languge  One of {@link Language} enum values
 */
export async function getVocabulariesByLanguage(languge: Language): Promise<Map<string, string>> {
  const WEBSERVICE_URL = process.env.REACT_APP_GATEWAY_URL as string

  const LANGUAGES = new Map<string, string>([
      [GERMAN, "/wilhelm/languages/german"],
      [ANCIENT_GREEK, "/wilhelm/languages/ancientGreek"],
      [LATIN, "/wilhelm/languages/latin"]
  ])

  const vocabulary = new Map<string, string>();

  const url = new URL(LANGUAGES.get(languge) as string, WEBSERVICE_URL)
  url.searchParams.append("perPage", "-1")
  url.searchParams.append("page", "-1")
  await fetch(url)
      .then(response => response.json())
      .then(data => {
        for (let item of data) {
          vocabulary.set(item["term"], item["definition"])
        }
      })

  return vocabulary
}
