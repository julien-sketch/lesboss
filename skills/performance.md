# Performance

Objectif :
Garder le site rapide et fluide, meme avec un design premium.

Priorites :

- images optimisees
- code propre
- composants legers
- animations maitrisees
- CLS minimal
- experience mobile fluide

Regles :

- utiliser `next/image`
- eviter les videos lourdes en fond
- limiter les effets flous ou filtres lourds
- eviter les bibliotheques inutiles
- lazy loading quand l'image n'est pas critique
- conserver `priority` seulement pour les images au-dessus de la ligne de flottaison

Verification :

- lint
- typecheck
- build
- controle visuel local quand possible
