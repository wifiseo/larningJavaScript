const student = [
    {id: 32, name: 'omar sunn'},
    {id: 34, name: 'don'},
    {id: 85, name: 'moto'},
    {id: 45, name: 'patlo'},
];

const nameS = student.map(x => x.name);
const  idS = student.map(x => x.id);

const smaller = student.filter(x => x.id < 40 );
console.log("the all id is", idS);
console.log(nameS);
console.log(smaller);

console.log("hello world")