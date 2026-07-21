/* =========================================================
   SITE.JS — panier, fond animé, menu, animations.
   Chargé sur toutes les pages (après catalogue.js).
   ========================================================= */

/* ---------- Particules en fond (canvas) ---------- */
(function () {
  var canvas = document.getElementById('particules');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var points = [];
  var NB = 70;

  function taille() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  taille();
  window.addEventListener('resize', taille);

  for (var i = 0; i < NB; i++) {
    points.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.6 + .4,
      vx: (Math.random() - .5) * .18,
      vy: -(Math.random() * .22 + .05),
      a: Math.random() * .5 + .15,
      or: Math.random() < .3
    });
  }

  var reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function anime() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.or
        ? 'rgba(212,175,106,' + p.a + ')'
        : 'rgba(255,255,255,' + (p.a * .55) + ')';
      ctx.fill();
    }
    if (!reduit) requestAnimationFrame(anime);
  }
  anime();
})();

/* ---------- Panier (localStorage, partagé entre les pages) ----------
   DESTOCKAGE : pièces uniques, donc UN SEUL ARTICLE par commande.
   Une ligne = { id, taille }. La quantité est toujours 1. */
var MAX_ARTICLES = 1;

var panier = [];
try { panier = JSON.parse(localStorage.getItem('solstice-panier')) || []; } catch (e) {}
// On normalise : quantité forcée à 1 et panier tronqué (anciens paniers enregistrés)
panier = panier
  .map(function (l) { return { id: l.id, taille: l.taille || null, qte: 1 }; })
  .slice(0, MAX_ARTICLES);

function sauverPanier() { localStorage.setItem('solstice-panier', JSON.stringify(panier)); }
function lignePanier(id, taille) {
  return panier.filter(function (l) { return l.id === id && l.taille === taille; })[0];
}
function ajouterAuPanier(id, taille) {
  if (lignePanier(id, taille)) {
    toast('Cet article est déjà dans ton panier');
    return false;
  }
  if (panier.length >= MAX_ARTICLES) {
    toast('Une seule pièce par commande — retire l\'article de ton panier');
    return false;
  }
  panier.push({ id: id, taille: taille, qte: 1 });
  majPanier();
  toast('Ajouté au panier ✓');
  return true;
}

function majBadge() {
  var badge = document.getElementById('badge-panier');
  if (!badge) return;
  badge.textContent = panier.length;
  badge.classList.toggle('actif', panier.length > 0);
}
function miniVisuel(p) {
  if (p.photo) return '<img src="' + p.photo + '" alt="" onerror="photoManquante(this,' + p.id + ')">';
  return svgProduit(p);
}
function majPanier() {
  var corps = document.getElementById('panier-corps');
  if (!corps) return;
  if (!panier.length) {
    corps.innerHTML = '<div class="panier-vide">Ton panier est vide.<br>' +
      'Choisis une pièce pour commander.</div>';
  } else {
    // Pas de sélecteur de quantité : une pièce unique, exemplaire unique.
    corps.innerHTML = panier.map(function (l, idx) {
      var p = produitParId(l.id);
      return '<div class="ligne-panier">' +
        '<div class="mini" style="background:' + p.fond + '">' + miniVisuel(p) + '</div>' +
        '<div class="det">' +
          '<div class="m">' + p.marque + '</div>' +
          '<div class="n">' + p.nom + '</div>' +
          '<div class="t">Taille : ' + (l.taille || 'à préciser') + '</div>' +
          '<div class="p">' + prixTexte(p) + '</div>' +
        '</div>' +
        '<button class="suppr" data-suppr="' + idx + '" aria-label="Retirer">×</button>' +
      '</div>';
    }).join('');
  }
  var total = panier.reduce(function (s, l) {
    var p = produitParId(l.id);
    return s + (p.prix || 0);
  }, 0);
  var surDemande = panier.some(function (l) { return !produitParId(l.id).prix; });
  var elTotal = document.getElementById('panier-total');
  if (elTotal) elTotal.textContent = total + ' €' + (surDemande ? ' +' : '');
  majBadge();
  sauverPanier();
}

var toastTimer;
function toast(msg) {
  var t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('actif');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { t.classList.remove('actif'); }, 1800);
}

/* Clics globaux : ajout rapide et suppression (pas de quantité) */
document.addEventListener('click', function (e) {
  var ajout = e.target.closest('.carte-ajout');
  if (ajout) {
    e.preventDefault();
    if (ajouterAuPanier(parseInt(ajout.dataset.id, 10), null)) ouvrePanier();
    return;
  }
  var suppr = e.target.closest('[data-suppr]');
  if (suppr) { panier.splice(parseInt(suppr.dataset.suppr, 10), 1); majPanier(); return; }
});

/* Ouverture / fermeture du panier */
function ouvrePanier() { document.body.classList.add('panier-ouvert'); }
function fermePanier() { document.body.classList.remove('panier-ouvert'); }
(function () {
  var o = document.getElementById('ouvre-panier');
  var f = document.getElementById('ferme-panier');
  var v = document.getElementById('voile');
  if (o) o.addEventListener('click', ouvrePanier);
  if (f) f.addEventListener('click', fermePanier);
  if (v) v.addEventListener('click', fermePanier);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fermePanier(); });
})();

/* Envoi de commande par mail */
(function () {
  var btn = document.getElementById('commander');
  if (!btn) return;
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (!panier.length) { toast('Ton panier est vide'); return; }
    var lignes = panier.map(function (l) {
      var p = produitParId(l.id);
      return '- ' + p.marque + ' — ' + p.nom +
        ' | Taille : ' + (l.taille || 'à préciser') +
        (p.prix ? ' (' + p.prix + ' €)' : ' (prix sur demande)');
    });
    var corps = 'Bonjour,%0D%0A%0D%0AJe souhaite commander :%0D%0A' +
      encodeURIComponent(lignes.join('\n')).replace(/%0A/g, '%0D%0A') +
      '%0D%0A%0D%0AMerci !';
    window.location.href = 'mailto:solstice.boutique@gmail.com?subject=' +
      encodeURIComponent('Commande Solstice') + '&body=' + corps;
  });
})();

/* ---------- Menu mobile ---------- */
(function () {
  var burger = document.getElementById('burger');
  if (!burger) return;
  burger.addEventListener('click', function () {
    document.body.classList.toggle('menu-ouvert');
  });
  document.querySelectorAll('.menu-mobile a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('menu-ouvert'); });
  });
})();

/* ---------- Header au scroll + bouton haut ---------- */
(function () {
  var header = document.getElementById('header');
  var btnHaut = document.getElementById('haut');
  window.addEventListener('scroll', function () {
    if (header) header.classList.toggle('scrolle', window.scrollY > 10);
    if (btnHaut) btnHaut.classList.toggle('actif', window.scrollY > 600);
  }, { passive: true });
  if (btnHaut) btnHaut.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ---------- Reveal au scroll ---------- */
(function () {
  var observer = new IntersectionObserver(function (entrees) {
    entrees.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('visible'); observer.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });
})();

/* Initialisation du panier au chargement */
majPanier();
