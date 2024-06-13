let accordion = document.getElementsByClassName("bt-accordion");
console.log(accordion);
Array.from(accordion).forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("ativo")
        let painel = button.nextElementSibling;
        if( painel.style.display === "block"){
            painel.style.display = "none";
        }
        else{
            painel.style.display = "block";
        }
    })
})