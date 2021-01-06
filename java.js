function forma() {

var x = document.querySelector("#vrata input").value;
if(x === "7483") {
alert("Vrata su se otključala");
document.write("KRAJ");
} else {
alert("Pogrešna šifra");
}
}

function forma2() {

var x = new Array("3", "8", "4", "7");
var y = document.querySelector("#ogledalo input").value;
if(y === "3847") {
alert(x.reverse());
} else {
alert("Pogrešna šifra");
}
}
	