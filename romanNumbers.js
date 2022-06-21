const romanNumbers = ["I", "V", "X", "L", "C", "D", "M"];
const r = "MMMDCCXXIV";
function romanToInt(r) {
	const romanObject = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
	const romanArray = Array.from(r);

	let output = [];

	romanArray.forEach((element, index, array) => {
		const subtractionConditionI =
			(element === "I" && array[index + 1] === "V") ||
			(element === "I" && array[index + 1] === "X");

		const noSubtractionConditionI =
			element === "I" && array[index + 1] !== "V" && array[index + 1] !== "X";
		const subtractionConditionX =
			(element === "X" && array[index + 1] === "L") ||
			(element === "X" && array[index + 1] === "C");

		const noSubtractionConditionX =
			element === "X" && array[index + 1] !== "L" && array[index + 1] !== "C";
		const subtractionConditionC =
			(element === "C" && array[index + 1] === "D") ||
			(element === "C" && array[index + 1] === "M");

		const noSubtractionConditionC =
			element === "C" && array[index + 1] !== "D" && array[index + 1] !== "M";

		if (subtractionConditionI) {
			output.push(-1);
		} else if ((element === "I") & noSubtractionConditionI) {
			output.push(romanObject.I);
		}
		if (subtractionConditionX) {
			output.push(-10);
		} else if ((element === "X") & noSubtractionConditionX) {
			output.push(romanObject.X);
		}
		if (subtractionConditionC) {
			output.push(-100);
		} else if ((element === "C") & noSubtractionConditionC) {
			output.push(romanObject.C);
		} else if (element === "V") {
			output.push(romanObject.V);
		} else if (element === "L") {
			output.push(romanObject.L);
		} else if (element === "D") {
			output.push(romanObject.D);
		} else if (element === "M") {
			output.push(romanObject.M);
		}
	});
	const sum = output.reduce((acc, element) => acc + element, 0);
	console.log(sum);
	console.log(output);
}
romanToInt(r);
