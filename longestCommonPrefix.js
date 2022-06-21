const stringArray = ["herlo", "hero", "hercules", "her", "herd"];
console.log("h" == "hero");
// console.log(stringArray[1].length);
console.log("hello".length);
function longestCommonPrefix(stringArray) {
	for (let i = 0; i < stringArray[0].length; i++) {
		for (let j = 1; j < stringArray.length; j++) {
			if (stringArray[0][i] !== stringArray[j][i]) {
				return stringArray[0].slice(0, i);
			}
		}
	}
}
console.log(longestCommonPrefix(stringArray));
