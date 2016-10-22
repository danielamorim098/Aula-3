$(document).ready(function () {
    $("#btnCalcular").click(function () {
        


        var escolha = parseInt($("#escolha").val());
        switch (escolha) {
            case 0: {
                var resposta = parseInt($("#txtA").val()) + parseInt($("#txtB").val());
                $("#txtResultado").val(resposta);
                break;
            }

            case 1: {
                var resposta = parseInt($("#txtA").val()) - parseInt($("#txtB").val());
                $("#txtResultado").val(resposta);

                break;
            }

            case 2: {
                var resposta = parseInt($("#txtA").val()) * parseInt($("#txtB").val());
                $("#txtResultado").val(resposta);
                break;
            }
            case 3: {
                var resposta = parseInt($("#txtA").val()) / parseInt($("#txtB").val());
                $("#txtResultado").val(resposta);
                break;
            }
            default: {
                alert("Essa operação é invalida");
                break;
            }
        }
    });
});


function teste() {
    alert("Vamos calcular");


}