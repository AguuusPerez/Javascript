
dineroRoberto = prompt("Cuanto dinero tenes Roberto? :");

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
   alert("Comprate el helado de agua!");
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Comprate el helado de crema!");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Comprate el Bombon helado marca heladix!");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Comprate el Bombon helado marca heladovich!");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Comprate el Bombon helado marca helardo! ");
}
else if (dineroRoberto >= 2.9 ){
    alert("Comprate el potecito de helado con confites o pote de 1/4! ");
} 
else {
    alert("No te alcanza para ningun helado!");
}



dineroPedro = prompt("Cuanto dinero tienes Pedro? :");

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Comprate el helado de agua!");
 }
 else if (dineroPedro >= 1 && dineroPedro < 1.6) {
     alert("Comprate el helado de crema!");
 }
 else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
     alert("Comprate el Bombon helado marca heladix!");
 }
 else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
     alert("Comprate el Bombon helado marca heladovich!");
 }
 else if (dineroPedro >= 1.8 && dineroPedro< 2.9) {
     alert("Comprate el Bombon helado marca helardo! ");
 }
 else if (dineroPedro >= 2.9 ){
     alert("Comprate el potecito de helado con confites o pote de 1/4! ");
 } 
 else {
     alert("No te alcanza para ningun helado!");
}



dineroCofla = prompt("Cuanto dinero tienes Cofla? :");
dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Comprate el helado de agua!");
    alert("Tu vuelto es:  " + (dineroCofla - 0.6) );
}
 else if (dineroCofla >= 1 && dineroCofla < 1.6) {
     alert("Comprate el helado de crema!");
     alert("Tu vuelto es:  " + (dineroCofla - 1) );
}
 else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
     alert("Comprate el Bombon helado marca heladix!");
     alert("Tu vuelto es:  " + (dineroCofla - 1.6) );
}
 else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
     alert("Comprate el Bombon helado marca heladovich!");
     alert("Tu vuelto es:  " + (dineroCofla - 1.7) );
}
 else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
     alert("Comprate el Bombon helado marca helardo! ");
     alert("Tu vuelto es:  " + (dineroCofla - 1.8));
}
 else if (dineroCofla >= 2.9 ){
     alert("Comprate el potecito de helado con confites o pote de 1/4! ");
     alert("Tu vuelto es:  " + (dineroCofla - 2.9));
} 
 else {
     alert("No te alcanza para ningun helado!");
}







