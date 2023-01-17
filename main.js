/* 
    Dado el siguiente array, muestra por consola
    la suma de premios de los jugadores de uruguay
*/

const players = [
    {name: 'Cristiano Ronaldo', country: 'Portugal', goldenBall: 5 , goldenBoot: 6},
    {name: 'Lionel Messi', country: 'Argentina', goldenBall: 7, goldenBoot: 4},
    {name: 'Luis Suárez', country: 'Uruguay', goldenBall : 0, goldenBoot: 2},
    {name: 'Diego Forlan', country: 'Uruguay', goldenBall :0 , goldenBoot: 2},
    {name: 'Thierry Henry', country: 'Francia', goldenBall : 0, goldenBoot: 2},
]

let uruguayPlayers = players.filter(player => player.country === "Uruguay");
let uruguayAwards = uruguayPlayers.map(player => player.goldenBall + player.goldenBoot);
let uruguayTotalAwards = uruguayAwards.reduce((acc, awards) => acc + awards);
console.log(uruguayTotalAwards);

let uruguayPlayers2 = players.filter(player => player.country === "Uruguay").map(player => player.goldenBall + player.goldenBoot).reduce((acc, awards) => acc + awards);
console.log(uruguayPlayers2);


/* 
    Dado el siguiente array:
*/

const forbesList = [
    {name: 'Elon Musk', amount: 219, age: 50, country:'EEUU', company:'Tesla', industry: 'Automotive'},
    {name: 'Jeff Bezos', amount: 171, age: 58, country:'EEUU', company:'Amazon', industry: 'Technology'},
    {name: 'Bernard Arnault', amount: 158, age: 73, country:'France', company:'LVMH', industry: 'Fashion'},
    {name: 'Bill Gates', amount: 129, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Warren Buffet', amount: 118, age: 91, country:'EEUU', company:'Berkshire', industry: 'Finance'},
    {name: 'Larry Page', amount: 111, age: 49, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Sergey Brin', amount: 171, age: 58, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Larry Ellison', amount: 106, age: 77, country:'EEUU', company:'Software', industry: 'Technology'},
    {name: 'Steve Ballmer', amount: 91, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Mukesh Ambani', amount: 90, age: 64, country:'India', company:'Diversified', industry: 'Finance'},
]

/* 
    1) Muestra por consola el listado de nombres de los millonarios
    2) Muestra por consola (true/false) si está Amancio en la lista
    3) Muestra por consola un listado con el resultado de dividir su patrimonio entre los años que tienen
    4) Muestra por consola la media de edad de los 10 billonarios de la lista forbes
    5) Muestra por consola la suma de dinero de los millonarios de EEUU que están relacionados con technología
    6) Muestra por consola el millonario más joven que no sea de EEUU
    7) Muestra por consola el millonario más mayor del top 5 de millonarios de EEUU
    8) Muestra por consola la media de edad y media de dinero de los millonarios de Google y Microsoft juntos
*/

//1) Muestra por consola el listado de nombres de los millonarios
console.log("\n-------------------------------\nEjercicio 1\n-------------------------------\n");

forbesList.forEach(person => console.log(person.name));

//2) Muestra por consola (true/false) si está Amancio en la lista
console.log("\n-------------------------------\nEjercicio 2\n-------------------------------\n");

console.log((((forbesList.filter(person => person.name === "Amancio")).length > 0)) ? true : false);

//3) Muestra por consola un listado con el resultado de dividir su patrimonio entre los años que tienen
console.log("\n-------------------------------\nEjercicio 3\n-------------------------------\n");

let patrimonio = forbesList.map(person => person.amount / person.age);

patrimonio.forEach(person => console.log(person));

//4) Muestra por consola la media de edad de los 10 billonarios de la lista forbes
console.log("\n-------------------------------\nEjercicio 4\n-------------------------------\n");

let mediaEdad = forbesList.map(person => person.age).reduce((acc, age) => acc + age);

console.log(mediaEdad / (forbesList.length));

//5) Muestra por consola la suma de dinero de los millonarios de EEUU que están relacionados con technología
console.log("\n-------------------------------\nEjercicio 5\n-------------------------------\n");

let techUsaSum = forbesList.filter(person => person.country === "EEUU" && person.industry === "Technology").map(person => person.amount).reduce((acc, amount) => acc + amount);

console.log(techUsaSum);

//6) Muestra por consola el millonario más joven que no sea de EEUU
console.log("\n-------------------------------\nEjercicio 6\n-------------------------------\n");

let yougestRich = forbesList.filter(person => person.country != "EEUU").reduce((acc, person) => (acc.age >= person.age) ? person : acc);

console.log(yougestRich);

//7) Muestra por consola el millonario más mayor del top 5 de millonarios de EEUU
console.log("\n-------------------------------\nEjercicio 7\n-------------------------------\n");

let oldestTopFiveRich = forbesList.filter(person => person.country = "EEUU").sort((a, b) => b.age - a.age).slice(0, 4);

console.log(oldestTopFiveRich[0]);

//8) Muestra por consola la media de edad y media de dinero de los millonarios de Google y Microsoft juntos
console.log("\n-------------------------------\nEjercicio 8\n-------------------------------\n");

let totalAge = forbesList.filter(person => person.company === "Microsoft" || person.company === "Google").map(person => person.age).reduce((acc, age) => acc + age);
let totalAmount = forbesList.filter(person => person.company === "Microsoft" || person.company === "Google").map(person => person.amount).reduce((acc, amount) => acc + amount);

console.log(totalAge / (forbesList.filter(person => person.company === "Microsoft" || person.company === "Google")).length);
console.log(totalAmount / (forbesList.filter(person => person.company === "Microsoft" || person.company === "Google")).length);