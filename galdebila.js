//console.log("Kaixo kontsola, zelan?");
/*
var app = {};
var galderak =  function(datos){
    console.log(datos);
}
document.getElementById("results").innerHTML="Divaren barruan nago";
*/

/**galdepila .js fitxategia da eta bariable bat bezala erabiltzen da  
var ekarri = ekarriGaldera(); 
console.log(ekarri.galderak[2].auke3);
document.getElementById('results').innerHTML = ekarri.galderak[2].auke3 + "  ekarri.galderak[0].auke3"; 
*/
/**galdepila .js fitxategia da eta bariable bat bezala erabiltzen da  */

//console.log("Hemen nabil, konektatuta nago 'froga.html' fitxategiarekin");

document.querySelector("#botoia").addEventListener('click', ekarriDatuak);

function ekarriDatuak(){
    //console.log("Funtzioaren barrutik");
    const xhttp= new XMLHttpRequest();
    xhttp.open('GET', 'katalogoa.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            let datuak = JSON.parse(this.responseText);
            //console.log(datuak);
            let res = document.querySelector('#res');
            res.innerHTML='';
            
            for(let item of datuak){
                //console.log(item.galdera);
                res.innerHTML += `
                    <td>${item.galdera}</td>
                    <td>${item.auke1}</td>
                    <td>${item.auke2}</td>
                    <td>${item.auke3}</td>
                `
            }

            let resbana = document.querySelector('#resbana');
            resbana.innerHTML='';

            resbana.innerHTML = ` <h2>Zerrenda</h2>
                    <li>${datuak[0].galdera}</li>
                    <li>${datuak[0].auke1}</li>
                    <li>${datuak[0].auke2}</li>
                    <li>${datuak[0].auke3}</li>
                `
            
            let itauna = document.querySelector('#galdera');
            itauna.innerHTML='';
            itauna.innerHTML= `<h3> Galdera: </h3> <h5> ${datuak[1].galdera} </h5>`;

            let azterketa = document.querySelector('#azterketa');
            azterketa.innerHTML='';
            azterketa.innerHTML= `
                    <a class="brand-logo">Erantzunak:</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a style="font-size:1.5rem;"  href="#">${datuak[1].auke1}</a></li>
                    <li><a style="font-size:1.5rem;" href="#">${datuak[1].auke2}</a></li>
                    <li><a style="font-size:1.5rem;" href="#">${datuak[1].auke3}</a></li>
                </ul>
            `
            let galde = document.querySelector('#itauna');
            galde.innerHTML='Hemen galdera';
            galde.innerHTML= `<h3> Galdera: </h3> <h5> ${datuak[2].galdera} </h5>
                    <nav>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="#" class="waves-effect waves-light btn" id="auke1">${datuak[2].auke1}</a></li>
                            <li><a href="#" class="waves-effect waves-light btn" id="auke2">${datuak[2].auke2}</a></li>
                            <li><a href="#" class="waves-effect waves-light btn" id="auke3">${datuak[2].auke3}</a></li>
                        </ul>
                    </nav>
                `;
            let arraposta1 = document.querySelector("#auke1");
            arraposta1.addEventListener('click', erantzunAuke1);
            function erantzunAuke1(){
                alert("Lehena ukeratu duzu.")
                document.querySelector("#erantzunak").innerHTML= `<h5>${datuak[2].eranfb1}</h5>`;
        }

        }
        
        }
    }


  
