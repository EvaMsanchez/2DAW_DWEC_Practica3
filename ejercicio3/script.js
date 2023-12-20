window.addEventListener("load", function()
{
    document.getElementById("boton").addEventListener("click", function()
    {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                let div = document.createElement("div");
                let p = document.createElement("p");
                p.innerHTML = this.responseText;
                div.append(p);
                document.body.append(div);
            } 
        }

        xhr.open("GET", "ajax.php?nombre=Marcos&apellido=López", true);
        xhr.send();
    });
});

