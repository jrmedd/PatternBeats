outlets = 9; //1 outlet for a list 16-bit integers, 8 for base-2 lists

var lsb = 0; //anything greater than zero puts the LSB first in base-2 lists

function toIntList(input) {
	var converted = input.match(/.{2}/g); //split longer hex value into array of pairs of values e.g. 'FF' 'F0' etc.
  for (var i = 0; i < converted.length; i ++) {
  	converted[i] = parseInt(converted[i], 16); //convert hex values to integers
  }
  outlet(0, converted); //output array
	toBitList(converted); //send array to be turnedw into base-2 lists
}

function toBitList(input) {
	for (var i = 0; i < input.length; i++) { //iterate over 8 integers
		var bits = input[i].toString(2); //convert to base-2 (binary)
	  while(bits.length < 8) {
		  bits = "0" + bits; //pad binary number with zeroes (maintaining length of 8 digits)
	  }
	  bits = bits.split("").map(Number); //convert array of strings to integers
		if (lsb < 1) { //if LSB isn't greater than 0, output normally
			outlet(i+1, bits);
		}
		else {
			outlet(i+1, bits.reverse()); //if LSB greater than zero, reverse the base-2 lists
		}
	}
}

function lsbSwitch(input) {
	if (input > 0) {
		lsb = 1;
	}
	else {
		lsb = 0;
	}
}
