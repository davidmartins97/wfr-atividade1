const frm = document.querySelector("form");
const respm = document.getElementById("menos");
const resp = document.getElementById("inDiv");
const respM = document.getElementById("mais");
const bloco = document.querySelector(".bloco");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = Number(frm.inNumber.value);

    if (isNaN(numero) || numero === 0) {
        alert("Digite um número válido!");
        return;
    }

    let res = "";
    for (let i = 1; i <= 10; i++) {
        res += `${numero} x ${i} = ${numero * i}\n`;
    }

    let res1 = "";
    for (let i = 1; i <= 10; i++) {
        res1 += `${numero + 1} x ${i} = ${(numero + 1) * i}\n`;
    }

    let res2 = "";
    for (let i = 1; i <= 10; i++) {
        res2 += `${numero - 1} x ${i} = ${(numero - 1) * i}\n`;
    }

    respm.innerText = res2;
    resp.innerText = res;
    respM.innerText = res1;

    bloco.style.visibility = "visible"; // Exibe o bloco de resultados
});
