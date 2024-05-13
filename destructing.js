//objeto 1

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];
  const[n1,n2,n3]=empleados

console.log (n2)


const { email } = empleados.find(empleado => empleado.name === "Luis");

console.log("email ",email)


//objeto 2

const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}
const { name: nombre, ...restoPokemon } = pokemon;
const pokemonModificado = { nombre, ...restoPokemon };

console.log(pokemonModificado);


// Bulbasaur
console.log(nombre); 


const { type } = pokemon;

//Tackle
const [ , tackleMove ] = pokemon.moves;

console.log(type); //grass
console.log(tackleMove); // Tackle

//objeto 3

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        defense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
};

const mergedPokemon = {
    ...pokemon, 
    ...pikachu, 
};

console.log(mergedPokemon);

sumEveryOther(6, 8, 2, 3, 1); //20
  sumEveryOther(11, 3, 12); //26 


  function sumEveryOther(...nums) {
    let suma = nums.reduce((total, num) => total + num, 0);
    return suma;
  }
  
  const resultado = sumEveryOther(6, 8, 2, 3, 1);
  console.log(resultado); // 20
  
 ; 
  const resultado2 = sumEveryOther(11, 3, 12);
  console.log(resultado2); 
  

  addOnlyNums(1, 'perro', 2, 4); //7

  function addOnlyNums(...args) {
    const numeros = args.filter(arg => typeof arg === 'number');
    const suma = numeros.reduce((total, num) => total + num, 0);
    return suma;
  }
  
  const resultados = addOnlyNums(1, 'perro', 2, 4);
  console.log(resultados); 

 countTheArgs('gato', 'perro'); //2
 countTheArgs('gato', 'perro', 'pollo', 'oso'); 
 

function countTheArgs() {
    const numArgs = arguments.length;
    return numArgs;
  }
  
  console.log(countTheArgs('gato', 'perro')); // 2
  console.log(countTheArgs('gato', 'perro', 'pollo', 'oso')); // 4
  
  function combineTwoArrays(arr1, arr2) {
    const combinedArray = [...arr1, ...arr2];
    return combinedArray;
  }
  
  
  const array1 = [1, 2, 3];
  const array2 = ['a', 'b', 'c'];
  const arraysresultado = combineTwoArrays(array1, array2);
  
  console.log(arraysresultado); 
  
  