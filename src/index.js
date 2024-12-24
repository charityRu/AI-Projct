function generatePoem(event){
    event.preventDefault();

    
    new Typewriter('#poem', {
        strings: "Demain, dès l’aube, à l’heure où blanchit la campagne,",
        autoStart: true,
     delaay:1 });

}




let poemFormElement=document.querySelector("#poem-generator")
poemFormElement.addEventListener("submit",generatePoem)