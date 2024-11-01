Wilhelm
=======

![Node Version][node version badge]
[![GitHub workflow status badge][GitHub workflow status badge]][GitHub workflow status URL]
[![sentry badge]](https://paion-data.sentry.io/projects/wilhelm/)
[![Apache License][Apache License Badge]][Apache License, Version 2.0]

__Wilhelm__ is a Quizlet alternative that helps with learning German, Ancient Greek, and Latin with 2 unique features:

1. Applying historical fonts that is unique to each language
2. Utilizing knowledge graph to visualize connections among Indo-European languages which greatly make multilingual
   study much more efficient

Please check out the app on [wilhelmlang.com](https://wilhelmlang.com/)

How Did Project Wilhelm Start
-----------------------------

Wilhelm started out as a Quizlet "companion" with no intent to be used by anyone other than myself.

I was studying Ancient Greek vocabulary on Quizlet the other day and got shockingly frustrated by their flashcards with
this horribly formatted Greek text:

<div align="center">
    <img src="./bad-font.png" width="60%">
</div>

Quizlet didn't believe that each language shines with their unique fonts from history (such as
[楷书](http://www.9610.com/zhmf/daode.htm) for Chinese,
[Gothic](https://hmmlschool.org/latin/) for Latin, and [Fraktur](https://en.wikipedia.org/wiki/Fraktur) for German).
They simply applied a monofont for all languages which, in the case of Greek, made the text look terribly uncomfortable.
I certainly disavowed it and decided to make my own flash card which ended up with much better visual like this:

<div align="center">
    <img src="./good-font.png" width="70%">
</div>

> [!NOTE]
>
> The new font above was inspired by the Zeph fonts invented by
> [the Loeb Classical Library in Harvard University](https://www.hup.harvard.edu/series/loeb-classical-library), who publishes Ancient Greek and Latin original texts
> I've been enjoying reading since I was a college student.
>
> The Zeph fonts are based on 'Porson' Greek
> [according to the information provided by Harvard University Press](https://www.loebclassics.com/page/logo) (HUP). But
> the Zeph* fonts themselves seem to be custom commissions for HUP for use in Loeb books, which means the fonts are
> close-sourced[^1].
>
> The closest font I found, thus, is the [GFS Porson for Ancient Greek](https://www.oocities.org/greekfonts/) which ended up being the Greek font I use
> for the flash cards in this project

### Why Do I Decide to Scale Project Wilhelm

Right after, I began to realize I could simply throw Quizlet to trash. I deleted my Quizlet account and relied solely on
Wilhelm. I was happy that I found a lot more pleasure studying languages with Wilhelm than I did on Quizlet.

In the meantime, I've been interested in Indo-European languages. Having been concurrently studying Ancient Greek,
Latin, and German, I got constantly well impressed by how these languages are
[_connected in various interesting ways_](https://github.com/QubitPi/wilhelm-vocabulary?tab=readme-ov-file#interesting-queries).
I then believe making such connections between languages visually explicit shall __boost people to learn multiple
languages much faster__.

Development
-----------

> [!IMPORTANT]
>
> Wilhelm requires Node 18 or above

### Starting Locally

To start Wilhelm locally:

```console
git clone git@github.com:QubitPi/wilhelm.git
cd wilhelm
yarn
yarn start
```

Then visit [localhost:3000](http://localhost:3000/)

### Testing

- Unit Tests: TBA
- E2E Tests: [Cypress] is used for E2E tests. To run them locally, first start the Wilhelm app locally with
  `yarn start`. Then we can run E2E tests either in terminal with `yarn e2e` or through Cypress UI with `yarn cy:open`.
  If E2E tests fail in CI/CD, the testing screenshot and video will be generated and can be downloaded at the bottom of
  each action run page

License
-------

The use and distribution terms for [wilhelm]() are covered by the [Apache License, Version 2.0].

[Apache License, Version 2.0]: https://www.apache.org/licenses/LICENSE-2.0
[Apache License Badge]: https://img.shields.io/badge/Apache%202.0-F25910.svg?style=for-the-badge&logo=Apache&logoColor=white

[Cypress]: https://cypress.qubitpi.org/

[GitHub workflow status badge]: https://img.shields.io/github/actions/workflow/status/QubitPi/wilhelm/ci-cd.yaml?branch=master&style=for-the-badge&logo=github&logoColor=white&label=CI/CD
[GitHub workflow status URL]: https://github.com/QubitPi/wilhelm/actions/workflows/ci-cd.yaml

[node version badge]: https://img.shields.io/badge/NODE-18-339933?logo=Node.js&logoColor=white&labelColor=66cc33&style=for-the-badge

[sentry badge]: https://img.shields.io/badge/sentry.io-362D59?logo=sentry&logoColor=white&&style=for-the-badge

[^1]: https://tex.stackexchange.com/a/163342/277953
