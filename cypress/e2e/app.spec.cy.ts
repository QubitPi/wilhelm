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

describe("Snapshot", () => {
  it("screenshot homepage", async () => {
    cy.visit("https://localhost:3000/");
    cy.argosScreenshot("homepage");
  });
});

describe("Home Page Rendering", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays flashcard section", () => {
    cy.get('*[class^="flashcards"]').should("exist");
  });

  it("displays graph section", () => {
    cy.get('*[class^="graphBrowser"]').should("exist");
  });

  it("displays navigation bar on the left", () => {
    cy.get('*[class="navigation"]').should("exist");
  });

  it("initially hides the details of navigation bar", () => {
    cy.get('*[class="navigation active"]').should("not.exist");
  });

  it("expands navigation bar once toggled", () => {
    cy.get('*[class="toggle"]').click().get('*[class="navigation active"]').should("exist");
  });
});
