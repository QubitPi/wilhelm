/**
 * Copyright 2025 Jiaqi Liu. All rights reserved.
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
import { type BasicNode, type BasicRelationship, GraphVisualizer } from "neo4j-devtools-arc";

interface GraphBrowserProps {
  nodes: BasicNode[];
  links: BasicRelationship[];
}

export default function GraphBrowser(props: GraphBrowserProps): JSX.Element {
  const isFullscreen = true;

  return (
    <GraphVisualizer
      maxNeighbours={100}
      hasTruncatedFields={false}
      nodes={props.nodes}
      autocompleteRelationships={false}
      relationships={props.links}
      isFullscreen={isFullscreen}
      nodeLimitHit={false}
      getAutoCompleteCallback={undefined}
      wheelZoomRequiresModKey={!isFullscreen}
      wheelZoomInfoMessageEnabled={false}
      useGeneratedDefaultColors={false}
      initialZoomToFit={true}
    />
  );
}
