// function getValue(key: string) {
// 	const a = {
// 		names: "muhammad",
// 		prise: "200",
// 		yosh: "22",
// 	};
// 	//@ts-ignore
// 	let w = a[key];
// 	return w;
// }

// let b = getValue("prise");
// console.log(b);

const a = {
	names: "muhammad",
	prise: "200",
	yosh: "22",
};
const aa = {
	names: "muhammad",
	prise: "200",
	yosh: "23",
};

function getValue(key: string) {
	//@ts-ignore
	let w = {
		a: [key],
		aa: [key],
	};

	return [`${w.a}`, `${w.aa}`];
}

let b = getValue("names");
console.log(b);
