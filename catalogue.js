/* =========================================================
   CATALOGUE — modifie tes produits ici.
   prix   : mets un nombre (ex: 450) ou null pour "Prix sur demande".
   photo  : photo principale, ex "images/doudoune-maya.jpg" (null = visuel stylisé).
   photos : liste de photos pour la galerie de la fiche produit,
            ex ["images/maya-1.jpg", "images/maya-2.jpg"] ([] = emplacements vides).
   desc   : description affichée sur la fiche produit.
   ========================================================= */
var PRODUITS = [
  // ---------- HIVER : DOUDOUNES ----------
  { id: 1,  saison: 'hiver', marque: 'Moncler',       nom: 'Doudoune Maya',            prix: 10,   tailles: 'XS · S · M · L · XL', badge: 'Nouveau',   teinte: '#1a2230', fond: 'linear-gradient(160deg,#141a24,#0b0f16)', photo: 'images/moncler-maya.webp', photos: [],
    desc: "L'iconique doudoune Maya de Moncler. Garnissage duvet haute qualité, finition brillante et coupe ajustée : la référence absolue pour affronter l'hiver avec style." },
  { id: 2,  saison: 'hiver', marque: 'Moncler',       nom: 'Doudoune tricot à capuche', prix: 10,   tailles: 'XS · S · M · L · XL',    badge: null,        teinte: '#3d434c', fond: 'linear-gradient(160deg,#191b1e,#0d0e10)', photo: 'images/moncler-tricot.webp', photos: [],
    desc: "Doudoune Moncler bi-matière : buste matelassé en duvet et manches en maille tricotée, avec capuche et poche zippée sur la manche. Le compromis parfait entre chaleur et allure, idéale en mi-saison." },
  { id: 3,  saison: 'hiver', marque: 'Ralph Lauren',  nom: 'Doudoune à capuche',       prix: 10,   tailles: 'XS · S · M · L · XL',      badge: 'Populaire', teinte: '#1d2b4f', fond: 'linear-gradient(160deg,#12182a,#0a0d15)', photo: 'images/ralph-lauren-capuche.webp', photos: [],
    desc: "Doudoune à capuche Ralph Lauren avec logo poney brodé. Chaleur, confort et élégance classique américaine, idéale pour tous les jours." },
  { id: 4,  saison: 'hiver', marque: 'Gucci',         nom: 'Doudoune GG monogramme',   prix: 10,   tailles: 'XS · S · M · L · XL',          badge: null,        teinte: '#c4a874', fond: 'linear-gradient(160deg,#1e1810,#0f0b07)', photo: 'images/gucci-matelassee.webp', photos: [],
    desc: "Doudoune Gucci en toile GG monogramme beige, rehaussée de motifs colorés dispersés. Col montant et volume généreux : la pièce statement de la maison italienne." },
  { id: 15, saison: 'hiver', marque: 'Moncler',       nom: 'Doudoune brillante à capuche', prix: 10,   tailles: 'XS · S · M · L · XL', badge: 'Populaire', teinte: '#171d28', fond: 'linear-gradient(160deg,#171d28,#0c1017)', photo: 'images/moncler-brillante.webp', photos: [],
    desc: "Doudoune Moncler en nylon laqué brillant, capuche ajustable et écusson signature sur la manche. Volume généreux, duvet chaud : la pièce d'hiver qui se remarque." },
  { id: 16, saison: 'hiver', marque: 'Canada Goose',  nom: 'Doudoune matelassée à capuche', prix: 10,   tailles: 'XS · S · M · L · XL', badge: 'Nouveau',   teinte: '#232326', fond: 'linear-gradient(160deg,#1b1517,#0e0b0c)', photo: 'images/canada-goose-capuche.webp', photos: [],
    desc: "Doudoune Canada Goose en tissu technique mat, capuche doublée et écusson Arctic Program sur la manche. Conçue pour le grand froid, coupe sobre et intemporelle." },
  { id: 20, saison: 'hiver', marque: 'Ralph Lauren',  nom: 'Doudoune matte à capuche', prix: 10,   tailles: 'XS · S · M · L · XL', badge: null,      teinte: '#1e1e22', fond: 'linear-gradient(160deg,#15161a,#0a0b0d)', photo: 'images/ralph-lauren-doudoune-2.webp', photos: [],
    desc: "Doudoune Ralph Lauren en nylon mat, capuche ajustable et poney brodé sur la poitrine. Plus sobre que la version brillante : le duvet chaud, l'allure discrète." },
  { id: 21, saison: 'hiver', marque: 'Nike',          nom: 'Doudoune matelassée noire', prix: 10,   tailles: 'XS · S · M · L · XL', badge: null,      teinte: '#1a1a1c', fond: 'linear-gradient(160deg,#151517,#0a0a0b)', photo: 'images/nike-doudoune-noire.webp', photos: [],
    desc: "Doudoune Nike en nylon brillant, col montant et Swoosh brodé sur la poitrine. Coupe courte et volume marqué : une pièce sportswear qui se porte partout." },
  { id: 22, saison: 'hiver', marque: 'Nike',          nom: 'Doudoune NOCTA jaune',      prix: 10,   tailles: 'XS · S · M · L · XL', badge: 'Nouveau', teinte: '#e0a017', fond: 'linear-gradient(160deg,#1f1808,#100c04)', photo: 'images/nike-nocta-jaune.webp', photos: [],
    desc: "Doudoune NOCTA × Nike dans son jaune signature, avec le logo NOCTA et le Swoosh sur la poitrine. Finitions noires contrastées aux poignets : une pièce rare et immédiatement reconnaissable." },
  { id: 23, saison: 'hiver', marque: 'Burberry',      nom: 'Doudoune Check à capuche',  prix: 10,   tailles: 'XS · S · M · L · XL', badge: 'Exclusif', teinte: '#c9b28a', fond: 'linear-gradient(160deg,#1e1a12,#0f0d08)', photo: 'images/burberry-doudoune-check.webp', photos: [],
    desc: "Doudoune Burberry au motif à carreaux emblématique, capuche doublée noire et poche poitrine contrastée. Une pièce d'hiver qui affirme la signature de la maison britannique." },
  { id: 24, saison: 'hiver', marque: "Arc'teryx",     nom: 'Parka technique à capuche', prix: 10,   tailles: 'XS · S · M · L · XL', badge: 'Nouveau',  teinte: '#232629', fond: 'linear-gradient(160deg,#14171a,#090b0d)', photo: 'images/arcteryx-doudoune-noire.webp', photos: [],
    desc: "Parka Arc'teryx en tissu technique déperlant, capuche ajustable et grandes poches à rabat. Conçue pour la montagne, taillée pour la ville : la référence du vêtement de performance." },

  // ---------- ÉTÉ : SHORTS ----------
  { id: 7,  saison: 'ete', marque: 'Ralph Lauren',  nom: 'Short molleton marine', prix: 10,   tailles: 'XS · S · M · L · XL', badge: 'Nouveau',   teinte: '#1c2438', fond: 'linear-gradient(160deg,#111621,#080b10)', photo: 'images/ralph-lauren-short-marine.webp', photos: [],
    desc: "Short en molleton Ralph Lauren bleu marine, taille élastiquée à cordon de serrage et poney brodé blanc. Confortable et intemporel, il se porte du matin au soir." },
  { id: 10, saison: 'ete', marque: 'Louis Vuitton', nom: 'Short Damier en soie',  prix: 10,   tailles: 'XS · S · M · L · XL',          badge: 'Exclusif',  teinte: '#2e4a63', fond: 'linear-gradient(160deg,#121a22,#090d11)', photo: 'images/louis-vuitton-short.webp', photos: [],
    desc: "Short Louis Vuitton en soie au motif Damier délavé, dans des tons bleu denim. Pièce exclusive de la maison, tombé fluide et finitions soignées." },
  { id: 13, saison: 'ete', marque: 'Nike',          nom: 'Short de sport noir',   prix: 10,   tailles: 'XS · S · M · L · XL', badge: 'Nouveau',   teinte: '#2a2a2e', fond: 'linear-gradient(160deg,#17171a,#0b0b0d)', photo: 'images/nike-short-noir.webp', photos: [],
    desc: "Short de sport Nike en tissu léger à séchage rapide, taille élastiquée et Swoosh blanc sur la jambe. L'essentiel du vestiaire sportif, en ville comme à l'entraînement." },
  { id: 14, saison: 'ete', marque: 'Under Armour',  nom: 'Short training',        prix: 10,   tailles: 'XS · S · M · L · XL', badge: null,        teinte: '#2a2a2e', fond: 'linear-gradient(160deg,#161618,#0b0b0c)', photo: 'images/under-armour-training.webp', photos: [],
    desc: "Short de training Under Armour en tissu léger et respirant, séchage rapide. Poches latérales et logo réfléchissant : conçu pour la performance, taillé pour l'été." },
  { id: 17, saison: 'ete', marque: 'Burberry',      nom: 'Short de bain Check',   prix: 10,   tailles: 'XS · S · M · L · XL', badge: 'Nouveau',   teinte: '#c9b08a', fond: 'linear-gradient(160deg,#1d1811,#0f0c08)', photo: 'images/burberry-short-bain.webp', photos: [],
    desc: "Short de bain Burberry orné du motif à carreaux emblématique de la maison. Taille élastiquée à cordon de serrage, tissu léger à séchage rapide : l'allure britannique au bord de l'eau." },
  { id: 18, saison: 'ete', marque: 'Denim Tears',   nom: 'Short Cotton Wreath gris', prix: 10,   tailles: 'XS · S · M · L · XL', badge: 'Nouveau',   teinte: '#b9bcc0', fond: 'linear-gradient(160deg,#1a1b1d,#0d0e0f)', photo: 'images/denim-tears-short-gris.webp', photos: [],
    desc: "Short en molleton Denim Tears gris chiné, orné des couronnes de coton signature de la marque. Cordon de serrage, coupe décontractée : une pièce streetwear forte." },
  { id: 19, saison: 'ete', marque: 'Denim Tears',   nom: 'Short Cotton Wreath noir', prix: 10,   tailles: 'XS · S · M · L · XL', badge: null,        teinte: '#2a2a2c', fond: 'linear-gradient(160deg,#161617,#0b0b0c)', photo: 'images/denim-tears-short-noir.webp', photos: [],
    desc: "La version noire du short molleton Denim Tears, avec les couronnes de coton en contraste. Confortable et immédiatement reconnaissable." },
  { id: 25, saison: 'ete', marque: 'Under Armour',  nom: 'Short de sport rose',   prix: 10,   tailles: 'XS · S · M · L · XL', badge: null,        teinte: '#e0439b', fond: 'linear-gradient(160deg,#1e0d18,#0f070c)', photo: 'images/under-armour-short-rose.webp', photos: [],
    desc: "Short Under Armour en tissu technique rose vif, léger et respirant, avec logo brodé sur la jambe. Une couleur qui ne passe pas inaperçue à l'entraînement." }
];

/* ---------- Visuels SVG (doudoune / short) ---------- */
function svgDoudoune(teinte) {
  return '<svg viewBox="0 0 200 240"><path d="M60 30 Q100 12 140 30 L168 52 Q178 62 174 78 L162 98 146 86 148 210 Q100 226 52 210 L54 86 38 98 26 78 Q22 62 32 52 Z" fill="' + teinte + '"/>' +
    '<path d="M54 86 Q100 100 146 86 M52 122 Q100 136 148 122 M52 156 Q100 170 148 156 M52 188 Q100 202 148 188" stroke="rgba(255,255,255,.16)" stroke-width="4" fill="none" stroke-linecap="round"/>' +
    '<path d="M84 34 Q100 28 116 34 L116 58 Q100 52 84 58 Z" fill="rgba(0,0,0,.35)"/>' +
    '<rect x="97" y="60" width="6" height="148" rx="3" fill="rgba(255,255,255,.22)"/>' +
    '<circle cx="100" cy="80" r="2.6" fill="#d4af6a"/><circle cx="100" cy="112" r="2.6" fill="#d4af6a"/><circle cx="100" cy="144" r="2.6" fill="#d4af6a"/><circle cx="100" cy="176" r="2.6" fill="#d4af6a"/></svg>';
}
function svgShort(teinte) {
  return '<svg viewBox="0 0 200 240"><path d="M46 70 Q100 58 154 70 L166 160 Q168 172 156 174 L118 180 Q110 181 108 172 L100 128 92 172 Q90 181 82 180 L44 174 Q32 172 34 160 Z" fill="' + teinte + '"/>' +
    '<path d="M46 70 Q100 84 154 70 L152 86 Q100 100 48 86 Z" fill="rgba(0,0,0,.3)"/>' +
    '<path d="M100 100 L100 128" stroke="rgba(255,255,255,.3)" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M58 98 L64 110 M142 98 L136 110" stroke="rgba(255,255,255,.3)" stroke-width="2.4" stroke-linecap="round"/>' +
    '<circle cx="100" cy="78" r="3" fill="#d4af6a"/><path d="M84 76 Q100 70 116 76" stroke="#d4af6a" stroke-width="1.6" fill="none"/></svg>';
}
function svgProduit(p) {
  return p.saison === 'hiver' ? svgDoudoune(p.teinte) : svgShort(p.teinte);
}
/* Si la photo n'existe pas encore dans le dossier images/,
   on remet automatiquement le visuel stylisé à la place (pas d'image cassée). */
function photoManquante(img, id) {
  var p = produitParId(id);
  var parent = img.parentNode;
  if (!p || !parent) return;
  parent.style.background = p.fond;
  parent.innerHTML = svgProduit(p);
}
/* Les photos sont detourees (fond transparent) : on les pose sur le
   degrade de l'article, comme les visuels stylises. Rendu homogene. */
function visuelProduit(p) {
  var dedans = p.photo
    ? '<img src="' + p.photo + '" alt="' + p.marque + ' ' + p.nom +
      '" onerror="photoManquante(this,' + p.id + ')">'
    : svgProduit(p);
  return '<div class="visuel" style="background:' + p.fond + '">' + dedans + '</div>';
}
function prixTexte(p) {
  return p.prix ? p.prix + ' €' : '<span class="demande">Prix sur demande</span>';
}
function produitParId(id) {
  return PRODUITS.filter(function (p) { return p.id === id; })[0];
}
function carteProduit(p, i) {
  return '<div class="carte" style="animation-delay:' + (i * 70) + 'ms">' +
    '<a href="produit.html?id=' + p.id + '" class="carte-photo">' +
      (p.badge ? '<span class="badge' + (p.badge === 'Exclusif' ? ' or' : '') + '">' + p.badge + '</span>' : '') +
      visuelProduit(p) +
      '<button class="carte-ajout" data-id="' + p.id + '">Ajouter au panier</button>' +
    '</a>' +
    '<a href="produit.html?id=' + p.id + '"><div class="carte-infos">' +
      '<div class="carte-marque">' + p.marque + '</div>' +
      '<div class="carte-nom">' + p.nom + '</div>' +
      '<div class="carte-bas"><span class="carte-prix">' + prixTexte(p) + '</span><span class="carte-tailles">' + p.tailles + '</span></div>' +
    '</div></a></div>';
}
