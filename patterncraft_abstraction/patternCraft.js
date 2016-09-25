outlets = 9; //1 outlet for a list 8-bit integers, 8 for base-2 lists

var msb = 0; //anything greater than zero ouputs punches as MSB-first

function processCard(input) {
	var converted = input.match(/.{2}/g); //split longer hex value into array of pairs of values e.g. 'FF' 'F0' etc.
	for (var i = 0; i < converted.length; i ++) {
  	converted[i] = parseInt(converted[i], 16); //convert hex values to integers
  }
	bits = toBitList(converted); //get array of base-2 arrays
	for (var i = 0; i < converted.length; i ++) {
		if (msb > 0) {
			bits[i].reverse();
			converted[i] = parseInt(bits[i].join(""), 2);//flipped bits parsed as MSB-first
		}
		outlet(i+1, bits[i].reverse());
	}
	outlet(0, converted);
}

function toBitList(input) {
	bitList = []
	for (var i = 0; i < input.length; i++) { //iterate over 8 integers
		var base2 = input[i].toString(2); //convert to base-2 (binary)
	  base2 = padZeroes(base2, 8);
	  base2 = base2.split("").map(Number); //convert array of strings to integers
		bitList.push(base2);
	}
	return bitList;
}

function msbSwitch(input) {
	if (input > 0) {
		msb = 1;
	}
	else {
		msb = 0;
	}
}

function padZeroes(input, amount) {
	while (input.length < amount) {
		input = "0" + input;
	}
	return input;
}
