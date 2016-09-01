function hexStringConvert(stringInput) {
	var converted = stringInput.match(/.{2}/g); //split longer hex value into array of pairs of values e.g. 'FF' 'F0' etc.
  for (var i = 0; i < converted.length; i ++) {
  	converted[i] = parseInt(converted[i], 16); //convert hex values to integers
  }
  outlet(0, converted); //output array
}
