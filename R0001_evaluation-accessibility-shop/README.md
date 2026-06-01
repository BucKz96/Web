# Evaluation – Développer un module d’accessibilité dans une interface e-commerce

## Objectif de l'évaluation

Cette évaluation a pour objectif de valider votre capacité à manipuler le **DOM** et à structurer vos données en **JavaScript**.

Vous allez devoir :
- Rendre **dynamique une interface e-commerce** en JavaScript,
- Intégrer un **module d'accessibilité** à partir d'une maquette Figma,
- Mettre en œuvre des **fonctionnalités dynamiques** et des **bonnes pratiques de structuration du code**.

> 🔒 Le panier est déjà intégré et développé en HTML/CSS. Vous n’avez **pas besoin de le développer**.


---

## Instructions

### Partie 1 : Interface e-commerce

1. **Ajouter des produits** dans le tableau `products` (min. 4 objets).
2. Afficher dynamiquement les produits dans la page à l’aide de `map()`.
3. Implémenter un **système de filtres** par catégorie via `filter()`.
4. En cliquant sur un produit, afficher une **modale avec ses détails** (`find()`).

### Partie 2 : Module d’accessibilité

1. Intégrer le module visuellement en vous appuyant sur la **maquette Figma**.
2. Ajouter les fonctionnalités suivantes :
   - **Changer la taille du texte** avec deux boutons (A+ / A-)
   - **Activer le thème sombre** (la classe `.dark` existe déjà dans le CSS)
   - **Activer la police dyslexie** (classe `.dyslexia` + police déjà fournie dans `assets/fonts/`)
3. Encapsuler chaque fonctionnalité dans des **fonctions nommées** claires.
4. Ajouter des **commentaires** pour expliquer votre code.

---

## Fichiers fournis

```plaintext
/evaluation-accessibility-shop
├── index.html           # Structure HTML déjà intégrée
├── style.css            # Feuille de style principale (interface e-commerce complète, sans accessibilité)
├── script.js            # Fichier JavaScript à compléter
├── assets/
│   └── fonts/
│       └── OpenDyslexic-Regular.otf   # Police pour le module dyslexie
├── README.md            # Présentation de l'évaluation
├── demonstration_video
```

_Une page Notion vous a été transmise pour accéder à cette évaluation. Veuillez vous y rendre afin d'obtenir toutes les informations concernant celle-ci._
