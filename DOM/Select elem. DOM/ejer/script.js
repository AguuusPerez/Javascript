 /*Aplicarle al botón un id
Seleccionar elementos por ID, otros por clase y otros por atributo y hacer console.log de los resultados*/ 

const btn = document.getElementById('button');
const userName = document.getElementById('user');

const section = document.getElementsByTagName('section');
const main = document.getElementsByTagName('main');

const classname = document.getElementsByClassName('title-name');
const picture = document.getElementsByClassName('card-ilustration');


console.log(btn, userName, section, main, classname, picture);
 