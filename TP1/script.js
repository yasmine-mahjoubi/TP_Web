// ---------- Partie 1 ----------

// ------------------------------
// Exercice 1 – Variables et portée
// ------------------------------
var a = 1;
let b = 2;
const c = 3;

console.log("Avant bloc -> a =", a, ", b =", b, ", c =", c);

{
  var a = 10;     
  let b = 20;     
  const cBloc = 30; 
  console.log("Dans le bloc -> a =", a, ", b =", b, ", cBloc =", cBloc);
}

console.log("Après bloc -> a =", a, ", b =", b, ", c =", c);

// Question piège : que se passe-t-il si on réaffecte une const ?
// c = 42; // Provoque une erreur TypeError : Assignment to constant variable.


// ------------------------------
// Exercice 2 – Fonctions fléchées
// ------------------------------
function somme(a, b) {
  return a + b;
}

// Réécriture en fonction fléchée
const sommeArrow = (a, b) => {
  return a + b;
};

// Avec return implicite
const sommeArrowImplicit = (a, b) => a + b;

console.log("somme(2,3) =", somme(2,3));
console.log("sommeArrow(2,3) =", sommeArrow(2,3));
console.log("sommeArrowImplicit(2,3) =", sommeArrowImplicit(2,3));


// ------------------------------
// Exercice 3 – Destructuring
// ------------------------------
const user = { name: "Noor", age: 10, city: "Tunis" };

// Extraction
const { name, age } = user;

console.log("Name =", name);
console.log("Age =", age);


// ------------------------------
// Exercice 4 – Spread Operator
// ------------------------------

// Fusionner deux tableaux
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const fusion = [...arr1, ...arr2];

console.log("Fusion des tableaux :", fusion);

// Copier un objet et modifier une valeur
const obj = { x: 1, y: 2 };
const objCopy = { ...obj, y: 99 };

console.log("Objet original :", obj);
console.log("Copie modifiée :", objCopy);

// -------------- Partie 2 ----------------
// ------------------------------
// Exercice 5 – Objet simple
// ------------------------------
const livre = {
  titre: "Le Petit Prince",
  auteur: "Antoine de Saint-Exupéry",
  annee: 1943,
  getInfo() {
    return `${this.titre}, écrit par ${this.auteur} en ${this.annee}`;
  }
};

console.log("Livre :", livre.getInfo());


// ------------------------------
// Exercice 6 – Classe ES6
// ------------------------------
class Etudiant {
  constructor(nom, note) {
    this.nom = nom;
    this.note = note;
  }

  getMention() {
    if (this.note >= 16) return "Très bien";
    if (this.note >= 14) return "Bien";
    if (this.note >= 10) return "Passable";
    return "Échec";
  }
}

// Instanciation de 3 étudiants
const etu1 = new Etudiant("Yasmine", 17);
const etu2 = new Etudiant("Karim", 13.5);
const etu3 = new Etudiant("Rania", 9);

console.log(`${etu1.nom} : ${etu1.getMention()}`);
console.log(`${etu2.nom} : ${etu2.getMention()}`);
console.log(`${etu3.nom} : ${etu3.getMention()}`);


// ------------------------------
// Exercice 7 – Tableaux avancés
// ------------------------------
const notes = [12, 5, 17, 9, 20];

// 1. Moyenne avec reduce
const moyenne = notes.reduce((somme, valeur) => somme + valeur, 0) / notes.length;
console.log("Moyenne =", moyenne.toFixed(2));

// 2. Tri décroissant
const decroissant = [...notes].sort((a, b) => b - a);
console.log("Tri décroissant =", decroissant);

// 3. Filtrer les notes ≥ 10
const reussites = notes.filter(n => n >= 10);
console.log("Notes ≥ 10 =", reussites);

// ------------- Partie 3 -----------------
// ------------------------------
// Exercice 8 – Promesse simple
// ------------------------------
const wait = ms => new Promise(res => setTimeout(res, ms));

async function telechargement() {
  console.log("Début");
  await wait(2000); // pause 2 secondes
  console.log("Fin");
}

// Lancer la simulation
telechargement();


// ------------------------------
// Exercice 9 – Fetch + async/await
// ------------------------------
async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    console.log("Titres des 5 premiers posts :");
    data.slice(0, 5).forEach((post, i) => {
      console.log(`${i + 1}. ${post.title}`);
    });
  } catch (err) {
    console.error("Erreur lors du fetch :", err);
  }
}

// Lancer la récupération des posts
getPosts();