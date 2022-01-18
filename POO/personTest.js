let myLib = require("C:\\Users\\edgar\\Desktop\\proyectosBootcamp\\proyectoscodenotch\\dia7FundamentosProgramacion\\Week_2\\POO\\person.js");


let personaObjeto =new myLib.Person("will",180,60);
console.log(personaObjeto.height);
console.log(personaObjeto.weight);
console.log(personaObjeto.name);
console.log(personaObjeto.calcIMC());
console.log(personaObjeto.calcAge());
console.log(personaObjeto.printAll());
console.log(personaObjeto.printHobbies());
