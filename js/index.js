//----------------------PRACTICA 1---------------------------//

let miNombre = "Agustin";
localStorage.setItem("userName", miNombre)
// console.log(localStorage);
let recuperoStorage =localStorage.getItem ("userName")
// console.log(recuperoStorage);
localStorage.clear()
// console.log(localStorage);

//----------------------PRACTICA 2---------------------------//

let peliculasFavoritas = ["Batman", "Spider-Man", "Interstellar"];
// localStorage.setItem("peliculaFavorita", peliculasFavoritas[1])
// // console.log(localStorage);
// let recuperoStorageDos = localStorage.getItem("peliculaFavorita")
// // console.log(recuperoStorageDos);
// localStorage.clear()


//----------------------PRACTICA 3---------------------------//

let peliculasJson = JSON.stringify (peliculasFavoritas)
localStorage.setItem("favoritos", peliculasJson)
console.log(localStorage);

//----------------------PRACTICA 4---------------------------//

let recuperoStorageTres = localStorage.getItem("favoritos")
let toParse = JSON.parse(recuperoStorageTres)
console.log(toParse);
toParse.push("Avatar");
let segundoJson = JSON.stringify (toParse);
localStorage.setItem("favoritos", segundoJson);
console.log(localStorage);

//----------------------PRACTICA 5---------------------------//

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

let winterlsComing = [];

for (let i = 0; i < got.length; i++) {
    //  console.log(got[i]); 
     if (got[i].ciudad == "Winterfell") {
        winterlsComing.push(got[i])
     } 
};

let formatoJson = JSON.stringify(winterlsComing);
localStorage.setItem("winterfell", formatoJson);
console.log(localStorage);
