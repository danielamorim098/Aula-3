$(document).ready(function () {
    $("#btnEndereco").click(function () {
        $.ajax({
            url: "http://cep.republicavirtual.com.br/web_cep.php?cep= " + $("#txtCep").val() + "&formato=jsonp",
            type: "GET",
            dataType: "json",
            success: function (json) {
                $("#txtLogradouro").val(json.logradouro);
                $("#txtTipoLogradouro").val(json.tipo_logradouro);
                $("#txtBairro").val(json.bairro);
                $("#txtCidade").val(json.cidade);
                $("#txtUf").val(json.uf);

            },

        });




    });
});


