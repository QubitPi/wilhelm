Ancient Greek Vocabulary
========================

![Node Version][node version badge]
[![License][License badge]][License URL]
![Last Commit][last commit badge]

How Did the Project Start
-------------------------

I was
[using Quizlet flashcard to study Ancient Greek Vocabulary](https://quizlet.com/865653695/ancient-greek-vocabulary-flash-cards/) 
the other day and saw this horribly formatted Greek text:

<div align="center">
    <img src="./bad-font.png" width="60%">
</div>

The Greek font looks terribly uncomfortable, because Quizlet uses the same font for all languages and I certainly don't
like it. So I decided to make my own flash card with a much better font (see the Note below) that results something like
this:

<div align="center">
    <img src="./good-font.png" width="70%">
</div>

> [!NOTE]
>
> The new font was inspired by the Zeph fonts invented by
> [the Loeb Classical Library in Harvard University](https://www.loebclassics.com/page/logo), which did a really good
> job on publishing Ancient Greek and Latin original texts.
> 
> The Zeph fonts are based on 'Porson' Greek according to the information provided by Harvard University Press (HUP).
> But the Zeph* fonts themselves seem to be custom commissions for HUP for use in Loeb books, which means the fonts are
> close-sourced[^1].
> 
> The closest font I found, thus, is the [GFS Porson for Ancient Greek](https://www.oocities.org/greekfonts/) which
> ended up being the Greek font I use for the flash cards in this project

Development
-----------

To start flashcards locally:

```console
git clone git@github.com:QubitPi/ancient-greek-vocabulary.git
cd ancient-greek-vocabulary
yarn
yarn start
```

> [!TIP]
>
> The vocabulary is from [Dickinson College Commentaries](https://dcc.dickinson.edu/greek-core-list) and is processed
> with a [Python script](./scripts/greek-core-list-extractor.py):
>
> ```console
> cd scripts
> python3 greek-core-list-extractor.py
> ```
> 
> The output of the script is the [vocabulary.js](src/vocabulary.js) which is loaded when React App starts.

License
-------

The use and distribution terms for [ancient-greek-vocabulary]() are covered by the
[Apache License, Version 2.0][License URL].

<div align="center">
    <a href="https://opensource.org/licenses">
        <img align="center" width="50%" alt="License Illustration" src="https://github.com/QubitPi/QubitPi/blob/master/img/apache-2.png?raw=true">
    </a>
</div>

[last commit badge]: https://img.shields.io/github/last-commit/QubitPi/ancient-greek-vocabulary/master?logo=github&style=for-the-badge
[License badge]: https://img.shields.io/badge/Apache%202.0-F25910.svg?style=for-the-badge&logo=Apache&logoColor=white
[License URL]: https://www.apache.org/licenses/LICENSE-2.0

[node version badge]: https://img.shields.io/badge/NODE-18-339933?logo=Node.js&logoColor=white&labelColor=66cc33&style=for-the-badge

[^1]: https://tex.stackexchange.com/a/163342/277953
