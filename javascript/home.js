
const overlay = document.getElementById("overlay");
const listaDeTorres = document.getElementById("chooseTower");
const submitButClick = document.getElementById("submitButton");
const acessCode = document.getElementById("acessCodeInput");

const opcoesTorres = [
    "Selecione uma torre",
    "T-001",
    "T-002",
    "T-000",
    "T-005",
];

opcoesTorres.forEach(function(opcao){
    const option = document.createElement("option");
    option.value = opcao;
    option.textContent = opcao;
    listaDeTorres.appendChild(option);
});

submitButClick.addEventListener("click", function(e){
    e.preventDefault();
    if (listaDeTorres.value === "" || acessCode.value === ""){
        return submitButClick.style.background = "red";
    }
    overlay.style.display = "none";

});