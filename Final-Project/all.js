document.addEventListener("DOMContentLoaded", function() {
    setTimeout(()=>{
        document.getElementsByClassName("holder")[0].classList.remove("hidden");
        const loader = document.getElementsByClassName('loader')[0].style;
        loader.opacity = 1;
        (function fade () {
            (loader.opacity -= .1) < 0?loader.display="none":setTimeout(fade,40)
        })();
    }, 500)
});

document.getElementById("modal").addEventListener("click", openModal);
document.getElementsByClassName("modal")[0].addEventListener("click", closeModal);

function openModal() {
    document.getElementsByClassName('modal')[0].classList.remove("hidden");
}

function closeModal() {
    document.getElementsByClassName('modal')[0].classList.add("hidden");
}
