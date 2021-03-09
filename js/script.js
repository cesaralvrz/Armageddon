$(document).ready(function(){
    // Rutina "push"
    $.getJSON("../json/push.json", function(data){
        var rutinas_data = '';
        // Creación de la tabla
        $.each(data, function(key, value){
            rutinas_data += '<tr>';
            rutinas_data += '<td>' + value.numero + '</td>';
            rutinas_data += '<td>' + value.musculo + '</td>';
            rutinas_data += '<td>' + value.ejercicio + '</td>';
            rutinas_data += '<td>' + value.series + '</td>';
            rutinas_data += '<td>' + value.repeticiones + '</td>';
            rutinas_data += '</tr>';
        });

        // Lo añadimos a la tabla 1 
        $('#table1').append(rutinas_data);
        // Cambiamos el color de fondo de las líneas impares
        $('#table1 tr:odd').css("background-color", "#c3c3c3");
    });

    // Rutina "pull"
    $.getJSON("../json/pull.json", function(data){
        var rutinas_data = '';
        // Creación de la tabla
        $.each(data, function(key, value){
            rutinas_data += '<tr>';
            rutinas_data += '<td>' + value.numero + '</td>';
            rutinas_data += '<td>' + value.musculo + '</td>';
            rutinas_data += '<td>' + value.ejercicio + '</td>';
            rutinas_data += '<td>' + value.series + '</td>';
            rutinas_data += '<td>' + value.repeticiones + '</td>';
            rutinas_data += '</tr>';
        });
        $('#table2').append(rutinas_data);
        $('#table2 tr:odd').css("background-color", "#c3c3c3");
    });

    // Rutina "piernas"
    $.getJSON("../json/piernas.json", function(data){
        var rutinas_data = '';
        // Creación de tabla
        $.each(data, function(key, value){
            rutinas_data += '<tr>';
            rutinas_data += '<td>' + value.numero + '</td>';
            rutinas_data += '<td>' + value.musculo + '</td>';
            rutinas_data += '<td>' + value.ejercicio + '</td>';
            rutinas_data += '<td>' + value.series + '</td>';
            rutinas_data += '<td>' + value.repeticiones + '</td>';
            rutinas_data += '</tr>';
        });
        // Lo añadimos a la tabla 2
        $('#table3').append(rutinas_data);
        // Cambiamos el color de fondo de las líneas impares
        $('#table3 tr:odd').css("background-color", "#c3c3c3");
    });

    // Asignamos a la variable "form" la clase del formulario
    var form = $(".imc-form");
    
    // Función al enviarse el formulario
	form.on("submit", function(e){
        e.preventDefault();
        
        // Función para calcular el IMC
		function calcIMC(){
            var peso = $("#peso").val();

            if(peso < 40 || peso > 300){
                return "Introduzca un peso válido";
            }
            var estatura = $("#estatura").val();

            if(estatura < 135 || estatura > 250){
                return "Introduzca una estatura válida"
            }
            
            estatura = estatura / 100;

			var imc = peso / (estatura * estatura);
			return imc.toFixed(2);
			
		}
        
        // Función para asignar el resultado
		function imcResult(){
			if(calcIMC() < 16.99 ){
				return "Delgadez severa";
			}
			else if(calcIMC() > 17 && calcIMC() < 18.49 ){
				return "Delgadez";
			}
			else if(calcIMC() > 18.50 && calcIMC() < 24.99 ){
				return "Peso Normal";
			}
			else if(calcIMC() > 25 && calcIMC() < 29.99 ){
				return "Sobrepeso";
			}
			else if(calcIMC() > 30 && calcIMC() < 34.99 ){
				return "Sobrepeso Tipo 1";
			}
			else if(calcIMC() > 35 && calcIMC() < 40 ){
				return "Sobrepeso Tipo 2";
			}
			else if(calcIMC() > 40){
				return "Sobrepeso Tipo 3";
			}
		}
        
        // Asignamos a la variable "resultDiv" las clases para visualizar el resultado
        var resultDiv = $(".imc-result .title-result");
        
        // Visualización del resultado
		resultDiv.html("IMC: " + calcIMC() + " (" + imcResult() + ")");
    });

    console.log("hola");
});
