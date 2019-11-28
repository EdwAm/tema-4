
const ulMatretter = document.querySelector("#ulMatretter");

const matretter = ["Kapteinens favoritt", "Kjøtt utklemt i panne", "Biff Stroganof"];

matretter.map( mat => ulMatretter.innerHTML += `<ul>${mat}</ul>` );