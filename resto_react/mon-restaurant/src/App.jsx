// TON TERRAIN DE JEU : les composants existent, à toi de les assembler ici.
// 1. Importe Header, Nav, Sidebar, ProductCard et Footer.
// 2. Importe ./data/products.js et affiche les produits avec .map().
// 3. Ajoute les providers puis branche les props aux contextes.
// 4. Ajoute Cart et CartModal pour les bonus.
// Classes disponibles : .container, .menu-layout et .product-grid.

export default function App() {
  return (
    <main className="starter container">
      <span className="eyebrow">FASTAPP RESTO · ATELIER REACT</span>
      <h1>À toi de composer<br />le menu.</h1>
      <p>Les composants, le style et les 42 produits sont prêts.
        Commence par assembler la page dans <code>src/App.jsx</code>.</p>
      <ol>
        <li>Assembler Header, Nav, Sidebar, les cartes et Footer.</li>
        <li>Créer le contexte de filtres et brancher les recherches.</li>
        <li>Créer le contexte panier, puis passer au reducer.</li>
      </ol>
      <p className="muted">Ton guide : README.md · Ta référence : maquette.png</p>
    </main>
  )
}
