const h2 = document.createElement("h2");
h2.textContent = "Showcasing My Pre-Work Development";
document.querySelector("body").appendChild(h2);



function changeColor() {
    el = document.getElementById("test")
    if (el.style.color === 'white') {
       el.style.color = 'red';
    } else {
        el.style.color = 'white';
    }
}