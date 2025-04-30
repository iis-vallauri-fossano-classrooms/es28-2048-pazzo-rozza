"use strict"

const DIM = 4;

window.onload = function () {
   const tabella = document.getElementById("wrapper");
   for (let i = 0; i < DIM; i++) {

      for (let j = 0; j < DIM; j++) {
         const cella = document.createElement("div");
         cella.id = `div-${i}-${j}`;
         cella.classList = "cella"

         tabella.appendChild(cella);
      }
   }
   let a, b, c, d;
   do {
      a = generaNumero(0, 4);
      b = generaNumero(0, 4);
      c = generaNumero(0, 4);
      d = generaNumero(0, 4);
      alert(a);
      alert(b);
      alert(c);
      alert(d);
   } while (a == c && b == d);
   let 
}

function generaNumero(min, max) {
   Math.floor(Math.random() * (max - min)) + min;
}