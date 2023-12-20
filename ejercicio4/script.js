$(window).on("load", function()
{
    $("#boton").on("click", function()
    {
        $.get("ajax.php",
        {nombre: "Samira", apellido: "Redondo"},
        function(datos)
        {
            let div = $("<di>");
            let p = $("<p>").text(datos);
            div.append(p);
            $("body").append(div);
        });
    });
});

