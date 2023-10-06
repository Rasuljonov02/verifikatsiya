import "./main.css";
import * as yup from "yup";

const til: HTMLInputElement = document.querySelector("#cel1")!;
const malumot: HTMLInputElement = document.querySelector("#cel2")!;
const urll: HTMLInputElement = document.querySelector("#cel3")!;
const davlat: HTMLSelectElement = document.getElementById(
	"inputGroupSelect01"
) as HTMLSelectElement;
const ittil: HTMLSelectElement = document.getElementById("inputGroupSelect02") as HTMLSelectElement;
const btn: HTMLButtonElement = document.querySelector("button")!;
const form: HTMLFormElement = document.querySelector("form")!;

const schema = yup.object().shape({
	til: yup
		.string()
		.required("Hato")
		.matches(/[a-zA-Z]g/),
	malumot: yup.string().required("Hato"),
	urll: yup.string().url("Invalid website URL").required("Hato"),
	davlat: yup.string().required("Hato"),
	ittil: yup.string().required("Hato"),
});

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const formData = {
		til: til.value,
		malumot: malumot.value,
		urll: urll.value,
		davlat: davlat.value,
		ittil: ittil.value,
	};

	schema
		.validate(formData)
		.then(() => {
			console.log(formData);
		})
		.catch((error) => {
			console.log(error);
		});
// console.log(formData);

	const til1: HTMLParagraphElement = document.querySelector(".til1")!;
	const davlat1: HTMLParagraphElement = document.querySelector(".url")!;
	const urll1: HTMLParagraphElement = document.querySelector(".form1")!;
	const ittil1: HTMLParagraphElement = document.querySelector(".form2")!;

	if (!til.value) {
		til.style.borderColor = "red";
		til.style.boxShadow = ` 1px 1px 21px rgba(255, 0, 0, 1);`;
		til1.innerText = "Xato qiymat";
	}
	if (!davlat.value) {
		davlat.style.borderColor = "red";
		davlat.style.boxShadow = `1px 1px 21px rgba(255, 0, 0, 1);`;
		davlat1.innerText = "Xato qiymat";
	}
	if (!urll.value) {
		urll.style.borderColor = "red";
		urll.style.boxShadow = ` 1px 1px 21px rgba(255, 0, 0, 1);`;
		urll1.innerText = "Xato qiymat";
	}
	if (!ittil.value) {
		ittil.style.borderColor = "red";
		ittil.style.boxShadow = ` 1px 1px 21px rgba(255, 0, 0, 1);`;
		ittil1.innerText = "Xato qiymat";
	}
	if (til.value) {
		til.style.borderColor = "";
		til.style.boxShadow = ``;
		til1.innerText = "";
	}
	if (davlat.value) {
		davlat.style.borderColor = "";
		davlat.style.boxShadow = ``;
		davlat1.innerText = "";
	}
	if (urll.value) {
		urll.style.borderColor = "";
		urll.style.boxShadow = ``;
		urll1.innerText = "";
	}
	if (ittil.value) {
		ittil.style.borderColor = "";
		ittil.style.boxShadow = ` `;
		ittil1.innerText = "";
	}
});
