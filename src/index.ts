const person = {
	name: "Arslonbek",
	age: 20,
	salary: 50,
};

// Bracket Notation
let needKey = "age";
// @ts-ignore
let myName = person[needKey];
console.log("myName = ", myName);

// Dot Notion
let myAge = person.age;
console.log("myAge = ", myAge);

// function getValue(key: string) {
// 	const obj = {
// 		color: "red",
// 		price: 2000,
// 	};
// 	// @ts-ignore
// 	return obj[key] || `not found ${key}`;
// }

// const value = getValue("name");
// console.log(value);

const person1 = {
	name: "arslonbek",
	age: 20,
	salary: 400,
};
const person2 = {
	name: "Kent",
	salary: 300,
};

function getValue(key: string) {
	return "";
}

const value = getValue("name"); // ["arslonbek", "Kent"]
