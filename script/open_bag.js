const bag = document.querySelector("#bag");
const bagContainer = document.querySelector(".bag-container");

bag.addEventListener('click', opendBag);


function opendBag() {
    if (bag.style.visibility == "visible") {
        if (bagContainer.style.visibility == "hidden") {
            bagContainer.style.visibility = "visible";
        } else {
            bagContainer.style.visibility = "hidden";
        }
    } 
}