var poopIconsList = document.querySelectorAll(".pinkStar");

function setFixedColor(starItemId) {
    //Agafa l'id, i li extreu el numero de l'icone PoopStar. ID --> starItem"02"
    let starItem = starItemId.substr(8);
    console.log(starItem);
    let i;
    //document.getElementById("iconsGrid-5").removeAttribute("class");
    //Afegeix la class chocoStar al dau clicat i a tots els anteriors. 
    for (i = 1; i <= starItem; i++) {
        document.getElementById("starItem" + i).classList.add("chocoStar");
    }
    //Treu la class painted als daus posteriors al dau clicat. Si és major que l'identificatiu o id fins que sigui igual al total d'icones que hi hagi a la llista
    for (i > starItem; i <= poopIconsList.length; i++) {
        document.getElementById("starItem" + i).classList.remove("chocoStar");
    }
    //document.getElementById("iconsGrid-5").setAttribute("class", "stars");
}

document.addEventListener("click", function (event) {
    //Es captura el lloc del document on s'ha clicat sigui quin sigui.
    var clearData = event.target;
    var poopBox = document.getElementById("iconsGrid-5");
    let i;
    //Si el lloc de la pantalla on s'ha clicat és dins del div amb l'id d'icons, torna false. 
    //poopBox forma part de clearData?
    if (!poopBox.contains(clearData)) {
        for (i = 1; i <= poopIconsList.length; i++) {
            document.getElementById("starItem" + i).classList.remove("chocoStar");
        }
    }
});





