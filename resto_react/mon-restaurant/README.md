# Mon Restaurant · Fastapp React

Base pédagogique React + Vite en JavaScript, avec CSS simple et responsive.
**L'assemblage et la logique métier sont volontairement à faire par toi.**

## Démarrer

Utilise Node.js 22.13 ou plus récent (Node 22 LTS conseillé).

```sh
cd resto_react/mon-restaurant
npm install
npm run dev
```

Depuis le dossier du projet, `npm run build` compile et `npm run lint` vérifie le code.
`npm run preview` sert la version compilée.

## Ce qui est prêt

- 16 composants de présentation avec leurs props et leurs callbacks.
- CSS responsive : header, navigation, sidebar, grille de cartes, footer et modal.
- 42 produits, 7 catégories, prix de 2 à 24 €, tags et mots-clés.
- Copyright avec l'année courante dans Footer.
- Formatage des prix en euros.
- Contextes déclarés et squelettes de providers / reducer.
- Maquette et fichiers originaux conservés. Les images du header/footer sont copiées dans `public/images/`.

La page de démarrage est un écran d'atelier. Aucun composant du restaurant n'est encore monté dans App.
Les boutons des composants émettent des callbacks ; ils ne filtrent et n'ajoutent encore rien.
Les providers renvoient simplement leurs enfants. Le reducer renvoie son état sans modification.

## Par où commencer

1. Dans `src/App.jsx`, importe et affiche Header, Nav et Footer.
2. Crée un `main` avec `id="menu"` et les classes `container menu-layout`.
3. Mets Sidebar à gauche. À droite, prévois SearchInput et un élément `product-grid`.
4. Importe `products` depuis `src/data/products.js` et fais ton `.map()` vers ProductCard. Utilise `product.id` comme key.
5. Compose Sidebar avec des SidebarBlock et les filtres CategoryFilter, PriceFilter et TagFilter.
6. Branche ensuite le fonctionnel ci-dessous.

La maquette de référence est `maquette.png`, à la racine. Le style livré en reprend la structure avec des couleurs sobres. Les cartes ont des emojis de remplacement : pour des photos, ajoute tes fichiers dans `public/images/` puis renseigne `product.image` avec `/images/nom.jpg`.

## Repères des composants

Tous les composants sont dans `src/components/`, avec un export par défaut.

- **Header** : `children` pour recevoir le bouton Cart.
- **Nav**, **Footer** : aucune prop nécessaire.
- **Sidebar** : `children` pour tes blocs.
- **SidebarBlock** : `title`, `children`.
- **Button** : `children`, `onClick`, `disabled`, `variant` (primary, secondary, light), et les attributs HTML habituels.
- **SearchInput** : `value`, `onChange(texte)`.
- **CategoryFilter** : `categories`, `selectedCategory`, `onChange(catégorie)`. La valeur vide représente toutes les catégories.
- **PriceFilter** : `value`, `onChange(texte)`. Le champ émet une chaîne, à convertir dans ta logique.
- **TagFilter** : `tags`, `selectedTag`, `onChange(tag)`.
- **Tag** : `label`, `active`, `onClick(tag)`.
- **ProductCard** : `product`, `quantity`, `selectedTag`, `onTagClick(tag)`, `onAdd(produit)`, `onRemove(id)`. Le bouton retirer apparaît quand onRemove est fourni.
- **Cart** : `count`, `onOpen()`.
- **CartModal** : `isOpen`, `onClose()`, `total`, `children`. Fournis une liste `ul.cart-items` contenant tes CartItem uniquement lorsque le panier contient des lignes. Sans children, la modal affiche son état vide.
- **CartItem** : `item` au format `{ product, quantity }`, `onAdd(produit)`, `onRemove(id)`.
- **EmptyState** : `onReset()`.

Les champs sont contrôlés : sans état et sans onChange branché, leur valeur ne change pas.
Les composants acceptent des props pour que tu choisisses où consommer les contextes avec useContext.

## À toi : les filtres

Fichiers de départ : `src/contexts/FilterContext.js` et `FilterProvider.jsx`.

- Créer l'état des filtres avec useState.
- Fournir filtres et actions via FilterContext.Provider.
- Entourer la partie utile de l'application avec ton provider et consommer le contexte avec useContext.
- Filtrer par tag depuis la sidebar ET depuis une carte.
- Filtrer par catégorie, par prix maximum inclus et par texte.
- Chercher dans le titre, la catégorie, les keywords et les tags.
- Combiner les critères (catégorie ET prix ET tag ET texte).
- Ajouter une remise à zéro et l'état sans résultat.

Pour cet exercice, un seul tag actif suffit. Un second clic sur le même tag peut le désélectionner.
Prix vide = aucune limite ; prix 0 = aucun produit de ce catalogue.
Pense aux espaces, à la casse et, si tu veux, aux accents. Ne modifie pas le catalogue d'origine.

## À toi : le panier et les bonus

Fichiers de départ : `src/contexts/CartContext.js`, `CartProvider.jsx` et `src/reducers/cartReducer.js`.

1. Commencer avec useState dans CartProvider et exposer le panier via useContext.
2. Ajouter une ligne par produit, puis augmenter uniquement la quantité si son id est déjà présent.
3. Calculer le compteur en additionnant les quantités, et le total en additionnant prix × quantité.
4. Gérer l'ouverture de CartModal avec un useState séparé.
5. Passer à useReducer pour le défi. Les actions suggérées sont ADD_ITEM (product) et REMOVE_ITEM (productId).
6. Pour retirer : absent → rien ; quantité > 1 → diminuer ; quantité = 1 → supprimer la ligne.
7. Brancher retirer dans les cartes et +/− dans la modal. Aucune quantité négative.

Le dialog natif s'occupe de l'affichage modal et du clavier ; tu fournis son état d'ouverture et son callback de fermeture.
Arrondis les sommes au centime, ou calcule en centimes entiers.

## Scénarios pour vérifier ton travail

- La carte complète affiche 42 produits ; chaque catégorie en contient 6.
- Catégorie Pizza + prix maximum 12 € : seule Margherita reste.
- Recherche « champignons » : 4 produits avant tout autre filtre.
- Prix maximum 0 : aucun produit. Prix vide : aucune limite de prix.
- Clique « Poulet » sur une carte puis dans la sidebar : même filtre partagé.
- Ajoute 2 fois Le Classique et 1 fois Frites maison : 2 lignes, 3 articles, total 24 €.
- Retire un Classique : 2 articles, total 14 €. Retire le dernier : sa ligne disparaît, total 4 €.
- Retire un produit absent : rien ne change.
- Ferme et rouvre la modal : le panier doit être conservé.
- Vérifie au clavier et sur une largeur de mobile.

## GitHub

Projet hébergé dans le dépôt existant :
https://github.com/BucKz96/Web/tree/main/resto_react/mon-restaurant

Après tes modifications, depuis ce dossier :
```sh
git add .
git commit -m "Branche les composants du restaurant"
git push
```

Le dossier `node_modules` et le résultat `dist` sont ignorés par Git.
Le fichier `package-lock.json` est versionné pour conserver les versions installées.

## Références

- Vite : https://vite.dev/guide/
- React useContext : https://react.dev/reference/react/useContext
- React useReducer : https://react.dev/reference/react/useReducer
