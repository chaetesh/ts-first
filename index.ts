let age: number = 20;
if (age < 20) {
    age += 10;
}
console.log(age)

// Specifying the variable type
let course: string = "typeScript";
// TS will automatically detect variable type and will specify it
let course2 = "typeScript2";

// When we can't say explicity the datatype or we don't know at present,
// We can use any which will automatically assign at runtime
function render(document:any) {
    console.log(document);
}

// as js has dynamic arrays, we can add different datatypes of elements to an array
// but when we want only numbers in ts, we can do this
let numbers: number[] = [1,2,3,];
// But if we want to specify different datatypes
let user: [number,string] = [1,"aetesh"]; 
// We can access all the properties of each element datatype using intelisense
// user[0].
// user[1].

// we can explicity add return datatype to functions 
function calculateTax(income: number): number{
    return 10000;
}

// objects in TS
let employee : {id: number,name: string} = {
    id: 1,
    name: "aetesh",
}

// We can use type in TS, so that we can avoid repeating ourselfs
type Employee = {
    id: number,
    name: string,
}
let employee2: Employee = {
    id: 2,
    name: "aman"
}

// we define multiple datatypes using OR
let weight: number | string;