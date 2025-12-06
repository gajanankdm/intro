const cl = console.log;


const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const addform = document.getElementById("addform");
const addbtn = document.getElementById("addbtn");
const total = document.getElementById("total");

function add(n1: number, n2: number): number {
    return n1 + n2;
}

function onaddfun() {
    let total1 = add(+num1.value, +num2.value);

    if (total) {
        total.value = total1
    }
    num1.value = "";
    num2.value = "";
}







//? nullchecker

addbtn?.addEventListener("click", onaddfun)