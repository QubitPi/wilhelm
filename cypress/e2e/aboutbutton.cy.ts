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

describe("About Button Rendering", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it('displays "about" icon on the upper right corner', () => {
    cy.get('*[class^="about"]').should("exist");
  });

  it('pops up a modal when the "about" button is clicked', () => {
    cy.get('*[class="about"]').click().get('*[class^="about-modal active"]').should("be.visible");
  });

  it("hides the modal clicking outside of the modal", () => {
    cy.get('*[class="about"]')
      .click()
      .get('*[class^="about-modal active"]')
      .click(100, 100)
      .get('*[class^="about-modal active"]')
      .should("not.exist");
  });

  it("still shows the modal if clicking inside the modal", () => {
    cy.get('*[class="about"]')
      .click()
      .get('*[class^="about-modal-content active"]')
      .click()
      .get('*[class^="about-modal active"]')
      .should("be.visible");
  });
});
