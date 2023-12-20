window.addEventListener("load", function()
{
    document.getElementById("boton").addEventListener("click", function()
    {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                let datos = xhr.responseXML;
                // Todos los elementos item.
                let items = datos.getElementsByTagName("item");

                // Crear un div para mostrar los resultados.
                let div = document.createElement("div");

                for (let i=0; i<items.length; i++)
                {
                    let nombre = items[i].getAttribute("nombre");
                    let apellido = items[i].getAttribute("apellido");

                    let p = document.createElement("p");
                    p.innerHTML = `Nombre: ${nombre} - Apellido: ${apellido}`;
                    div.append(p);
                }

                document.body.append(div);
            }
        }

        xhr.open("GET", "ajax.xml", true);
        xhr.send();
    });
});


