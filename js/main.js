function operacionesBasicas(){
    var A;
    var B;
    var suma;
    var resta;
    var multi;
    var div;

    A = parseInt(prompt ("POR FAVOR INGRESE EL PRIMER VALOR (A) PARA REALIZAR LAS OPERACIONES MATEMARTICAS: "));

    B = parseInt(prompt ("POR FAVOR INGRESE EL SEGUNDO VALOR (B) PARA REALIZAR LAS OPERACIONES MATEMARTICAS: "));

    suma = A + B;
    resta = A - B;
    multi = A * B;
    div = A / B;

    alert("AL REALIZAR LA SUMA DE " + A + " Y " + B + " SU RESULTADO ES: " + suma);

    alert("AL REALIZAR LA RESTA DE " + A + " Y " + B + " SU RESULTADO ES: " + resta);

    alert("AL REALIZAR LA MULTIPLICACION DE " + A + " Y " + B + " SU RESULTADO ES: " + multi);

    alert("AL REALIZAR LA DIVISION DE " + A + " Y " + B + " SU RESULTADO ES: " + div)
}


function exponerNumero(){
    var A;
    var Expo;
        
    A = parseInt(prompt("POR FAVOR INGRESE EL NUMERO PARA HALLAR SU VALOR AL CUADRADO:"));
        
    Expo = A * A;

    alert("EL VALOR DEL CUADRADO DE " + A + " ES: " + Expo);
}


function areaTriangulo(){
    var B;
    var H;
    var A;
        
    B = parseFloat(prompt("POR FAVOR INGRESE EL VALOR DE LA BASE DEL TRIÁNGULO, PARA HALLAR SU AREA:"));

    H = parseFloat(prompt("POR FAVOR INGRESE EL VALOR DE LA ALTURA DEL TRIÁNGULO, PARA HALLAR SU AREA:"));
        
    A = B * H / 2;
        
    alert("EL AREA DEL TRIANGULO INGRESADO CON UNA BASE DE " + B + " Y UNA ALTURA DE " + H + " ES: " + A);
}


function convertirMetros(){
    var M;
    var CM;
        
    M = parseInt(prompt("POR FAVOR INGRESE EL NUMERO DE METROS A CONVERTIR EN CENTIMETROS: "));
        
    CM = M * 100;
        
    alert("AL CONVERTIR LOS " + M + " METROS INGRESADOS A CENTIMETROS OBTENEMOS " + CM + " CENTIMETROS");
}

function numeroMayor() {
    var A;
	var B;
		
	A = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR A EVALUAR PARA DETERMINAR CUAL ES MAYOR:"))
	
	B = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR A EVALUAR PARA DETERMINAR CUAL ES MAYOR:"))

    if (A == B) {
        alert("LOS NUMEROS INGRESADOS SON IGUALES " + A + " Y " + B)
    }else if (A > B) {
        alert("EL NUMERO MAYOR DE LOS INGRESADOS ES: " + A)
    }else{
        alert("EL NUMERO MAYOR DE LOS INGRESADOS ES: " + B)
    }
}

function numeroMenor() {
    var A;
	var B;
	var C;
	
	A = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR PARA DETERMINAR CUAL ES EL NUMERO MENOR:"))
	
	B = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR PARA DETERMINAR CUAL ES EL NUMERO MENOR:"))
	
	C = parseInt(prompt("POR FAVOR INGRESE EL TERCER VALOR PARA DETERMINAR CUAL ES EL NUMERO MENOR:"))

    if ((A == B)&&(A == C)) {
        alert("LOS TRES NUMEROS INGRESADOS SON IGUALES A: " + A)
    }else if ((A <= B)&&(A <= C)) {
        alert("EL NUMERO MENOR DE LOS TRES NUMEROS INGRESADOS ES: " + A)
    }else if ((B <= A)&&(B <= C)) {
        alert("EL NUMERO MENOR DE LOS TRES NUMEROS INGRESADOS ES: " + B)
    }else{
        alert("EL NUMERO MENOR DE LOS TRES NUMEROS INGRESADOS ES: " + C)
    }

}

function numeroPar() {
    var A;

	A = parseInt(prompt("POR FAVOR INGRESE EL NUMERO PARA DETERMINAR SI ES PAR O IMPAR:"))
	
    if (A % 2 == 0) {
        alert("EL NUMERO " + A + " ES UN NUMERO PAR.")
    } else {
        alert("EL NUMERO " + A + " ES UN NUMERO IMPAR.")
    }
}