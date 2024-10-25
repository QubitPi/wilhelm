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

describe('Navigation Bar Rendering', () => {
  beforeEach(() => {
    cy
        .visit("http://localhost:3000/")
  })

  it('contains, inside navigation bar, 1 header and 3 languages - Ancient Greek, Latin, and German', () => {
    cy
        .get('*[class="toggle"]')
        .click()
        .get('*[class="navigation active"]')
        .get("ul > li")
        .should('have.length', 4)
        .get('ul > li:nth-child(1) > a > span').should('have.text', "Wilhelm")
        .get('ul > li:nth-child(2) > a > span').should('have.text', "Ancient Greek")
        .get('ul > li:nth-child(3) > a > span').should('have.text', "Latin")
        .get('ul > li:nth-child(4) > a > span').should('have.text', "German")
  })
})
