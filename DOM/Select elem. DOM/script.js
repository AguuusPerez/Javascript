
/*Contar cantidad de li que tenemos en nuestro html*/

const liLength = document.getElementsByClassName('count').length;
const result = document.getElementById('result');
result.innerHTML = `Actualmente tenemos ${liLength} list`;