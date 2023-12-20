$(window).on("load", function()
{
    $("#boton").on("click", function()
    {
        $.getJSON("ajax.json", function(datos)
        {
            $("#autor").text(datos.nombre + " " + datos.apellido);
        
            for (let i = 0; i < datos.libros.length; i++) {
                let num = i + 1;
                $("#titulo" + num).text(datos.libros[i].titulo);
                $("#subtitulo" + num).text(datos.libros[i].subTitulo);
            }
        });
    });
});

