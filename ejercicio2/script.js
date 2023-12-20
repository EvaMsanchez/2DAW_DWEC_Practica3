$(window).on("load", function()
{
    $("#boton").on("click", function()
    {
        $.get("ajax.xml", function(datos)
        {
            let resultado1 = "";
            let resultado2 = "";

            // Todos los elementos item.
            $(datos).find("item").each(function(index)
            {
                let nombre = $(this).attr("nombre");
                let apellido = $(this).attr("apellido");
            
                let resultado = `<p>Nombre: ${nombre} - Apellido: ${apellido}</p>`;

                index === 0 ? resultado1 = resultado : resultado2 = resultado;
            });

            $("#contenedor1").append(resultado1);
            $("#contenedor2").append(resultado2);
        });
    });
});

