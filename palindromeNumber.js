function palindromeNumber(num) {
	const string = num.toString();
	const array1 = Array.from(string);
	const array2 = array1.slice().reverse();
	return array1.every((element, index) => element === array2[index]);
}

console.log(palindromeNumber(11211211));
