import {driver, auth} from "neo4j-driver";
import {Language} from "../appSlice";

/**
 * An abstract layer that reads vocabulary data directly from Neo4J database.
 *
 * @param languge  One of {@link Language} enum values
 *
 * @deprecated
 */
export async function getVocabulariesByLanguage(languge: Language): Promise<Map<string, string>> {
  const URI = process.env.REACT_APP_NEO4J_URI as string
  const USER = process.env.REACT_APP_NEO4J_USERNAME as string
  const PASSWORD = process.env.REACT_APP_NEO4J_PASSWORD as string

  const databaseDriver = driver(URI, auth.basic(USER, PASSWORD))

  const {records} = await databaseDriver.executeQuery(
      'MATCH (t:Term WHERE t.language = $language)-[r]->(d:Definition) RETURN t.name, d.name',
      {language: languge},
      {database: 'neo4j'}
  )

  const vocabulary = new Map<string, string>();

  for (let record of records) {
    vocabulary.set(record.get(0), record.get(1))
  }

  return vocabulary
}
