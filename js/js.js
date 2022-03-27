function scroll(element){
    document.querySelector(element).scrollIntoView({behavor: "smooth"});
}

document.querySelectorAll("#btn").addEventListener("click", function (event){
    event.preventDefault();
    scrollTo("#metodologia");
});
