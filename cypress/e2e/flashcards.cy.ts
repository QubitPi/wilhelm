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

describe('Flashcard Section Rendering', () => {
  beforeEach(() => {
    cy
        .visit("http://localhost:3000/")
  })

  it('always displays the forward button', () => {
    cy
        .get('*[class="vocArrow next"]')
        .should("exist");
  })

  it('displays the backward button once the forward button is clicked', () => {
    cy
        .get('*[class="vocArrow prev"]')
        .should("not.exist")
        .get('*[class="vocArrow next"]')
        .click()
        .get('*[class="vocArrow prev"]')
        .should("exist")
  })
})
