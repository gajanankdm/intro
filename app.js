var cl = console.log;
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var addform = document.getElementById("addform");
var addbtn = document.getElementById("addbtn");
var total = document.getElementById("total");
function add(n1, n2) {
    return n1 + n2;
}
function onaddfun() {
    var total1 = add(+num1.value, +num2.value);
    if (total) {
        total.value = total1;
    }
    num1.value = "";
    num2.value = "";
}
//? nullchecker
addbtn === null || addbtn === void 0 ? void 0 : addbtn.addEventListener("click", onaddfun);
