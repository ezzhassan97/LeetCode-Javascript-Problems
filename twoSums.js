const numArray = [1, 2, 3, 4, 5, 10];
const target = 45;

function twoSums(numArray, target) {
	let outputArray = [];
	numArray.forEach((element, index, numArray) => {
		for (let i = index + 1; i < numArray.length; i++) {
			let sumNumber = element + numArray[i];

			if (sumNumber === target) {
				outputArray.push(index, i);
			}
		}
	});
	if (outputArray.length > 0) {
		return outputArray;
	} else {
		return "No Sum Combination in this Array Satisfies the Target";
	}
}

console.log(twoSums(numArray, target));
