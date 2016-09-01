function list() {
  var inputs = arrayfromargs(arguments); //create array from list of inputs in Max
  toBits(inputs[0], inputs[1]); //pass list to conversion function
}

function toBits(input, order) {
  var bits = input.toString(2); //convert to base-2 (binary)
  while(bits.length < 8) {
	  bits = "0" + bits; //pad binary number with zeroes (maintaining length of 8 digits)
  }
  bits = bits.split("").map(Number); //convert array of strings to integers
  if (order == 0) {
    outlet(0, bits.reverse()); //reverse order i.e. LSB first (suitable for sequencer)
  }
  else {
    outlet(0, bits); //output MSB first
  }
}
