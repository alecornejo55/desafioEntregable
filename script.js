let repetir = true;
let total = 0;
let mensaje = "Ingrese un número";
let historial = '';
while(repetir){
    console.log(mensaje);
    let numero = parseFloat(prompt(mensaje));
    if(!isNaN(numero) && numero > 0){
        historial += `• ${numero}\n`;
        if(total>0){
            mensaje = "Ingrese otro número a sumar";
            total+=numero;
            if(!confirm(`Total: ${total}\n¿Desea continuar?`)){
                alert(`Proceso terminado\nHistorial:\n${historial}\nTotal: ${total}`);
                repetir = false;
            }
        }
        else {
            total = numero;
            mensaje = "Ingrese un número a sumar";
        }
    }
    else {
        alert("Número no válido");
    }
}