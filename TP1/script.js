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

