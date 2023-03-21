// TODO List

// const todoList = document.querySelector("#todo_list");
// const addButton = document.querySelector("#todo_add");
// const addInput = document.querySelector("#todo_add_input");
// const deleteButton = document.querySelector("#todo_delete");

// addButton.addEventListener("click", (clickEvent) => {
// 	if (addInput.value !== "") {
// 		const listItem = document.createElement("option");
// 		listItem.innerText = addInput.value;
// 		listItem.value = addInput.value;

// 		todoList.append(listItem);
// 		addInput.value = "";
// 		addInput.focus();
// 	}
// });

// Time and Date

const date = new Date();
let hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
let mins = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();

const time = () => {
	let greetingString;
	let def = new Date().toLocaleTimeString();
	let timeString = `${
		hours > 12 ? hours - 12 : hours
	}:${mins} ${def.substring(8, 11)}`;
	let background;

	if (hours >= 21 || hours <= 6) {
		greetingString = "Good night, ";
		background = "night1.jpg";
	} else if (hours >= 18) {
		greetingString = "Good evening, ";
		background = "evening1.jpg";
	} else if (hours >= 12) {
		greetingString = "Good afternoon, ";
		background = "afternoon1.jpg";
	} else {
		greetingString = "Good morning, ";
		background = "morning1.jpg";
	}

	document.getElementById("time").innerText = timeString;
	document.getElementById("greeting").innerText = `${greetingString}Ryan.`;
	document.body.style.backgroundImage = `url(../images/${background})`;
	document.body.style.backgroundSize = "cover";
};

const calendar = () => {
	const DAYS = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const MONTHS = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	let d = DAYS[date.getDay()];
	let m = MONTHS[date.getMonth()];
	let n = date.getDate();
	let y = date.getFullYear();

	document.getElementById("date").innerText = `${d}, ${m} ${n}, ${y}`;
};

setInterval(calendar, 1000);
setInterval(time, 1000);
