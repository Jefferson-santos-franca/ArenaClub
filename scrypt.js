const send = document.getElementById("send");
var slc = document.getElementById("select-name");
var slc2 = document.getElementById("select-number");
var paragrafo = document.getElementById("showStudent");
var observacao = document.getElementById("obs");

function turnTo() {
    if (slc.value === "jefferson") {
        slc2.value = "8";
    }
    if (slc.value === "vini") {
        slc2.value = "10";
    }
    if (slc.value === "vitor") {
        slc2.value = "6";
    }
    if (slc.value === "ana") {
        slc2.value = "2";
    }
    if (slc.value === "ricardo") {
        slc2.value = "1";
    }
    if (slc.value === "pamela") {
        slc2.value = "7";
    }
    if (slc.value === "maria") {
        slc2.value = "9";
    }
    if (slc.value === "joao") {
        slc2.value = "3";
    }
}

const showStudent = () => {
    paragrafo.textContent = `${slc.value} - ${slc2.value} -> ${observacao.value}`;
};

send.addEventListener("click", showStudent);
