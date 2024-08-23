Wilhelm
=======

![Node Version][node version badge]
[![Deployment][Deployment badge]][Deployment dashboard URL]
[![Apache License][Apache License Badge]][Apache License, Version 2.0]

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

License
-------

The use and distribution terms for [wilhelm]() are covered by the [Apache License, Version 2.0].

[Apache License, Version 2.0]: https://www.apache.org/licenses/LICENSE-2.0
[Apache License Badge]: https://img.shields.io/badge/Apache%202.0-F25910.svg?style=for-the-badge&logo=Apache&logoColor=white

[Deployment badge]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
[Deployment dashboard URL]: https://vercel.com/qubitpis-projects/wilhelm

[node version badge]: https://img.shields.io/badge/NODE-18-339933?logo=Node.js&logoColor=white&labelColor=66cc33&style=for-the-badge

[^1]: https://tex.stackexchange.com/a/163342/277953
