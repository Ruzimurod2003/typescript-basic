let city: string = "Tashkent";
console.log(city.toUpperCase());

let first_variable;
first_variable = "Bukhara";

first_variable = (<string>first_variable).toUpperCase();
console.log(first_variable);


let second_variable;
second_variable = "Samarkand";

second_variable = (second_variable as string).toUpperCase();
console.log(second_variable);