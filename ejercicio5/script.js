window.addEventListener("load", function()
{
    document.getElementById("boton").addEventListener("click", function()
    {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                let datos = JSON.parse(xhr.responseText);
                document.getElementById("autor").textContent = datos.nombre + " " + datos.apellido;

                let titulos = "";
                let subtitulos = "";

                for (let i=0; i<datos.libros.length; i++)
                {
                    titulos += (i+1) + ". " + datos.libros[i].titulo + " - ";
                    subtitulos += (i+1) + ". " + datos.libros[i].subTitulo + " - ";
                } 
                document.getElementById("titulo").textContent = titulos;
                document.getElementById("subtitulo").textContent = subtitulos;
            }
        }
       
        xhr.open("GET", "ajax.json", true);
        xhr.overrideMimeType("text/plain");
        xhr.send();
    });
});

