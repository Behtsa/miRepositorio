var removeDuplicate = function(array){
	var newArray = [];

	for (var i = 0; i < array.length; i++) {
		//console.log(newArray.indexOf(array[i]) === -1);
		if(newArray.indexOf(array[i]) === -1){
			newArray.push(array[i]);
		}
	}
	return newArray;
}	


arr = [4, 7, 6, 9, 4, 9];

console.log(removeDuplicate(arr));
