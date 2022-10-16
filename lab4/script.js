const seventhElement = document.getElementById("seventh-element");
seventhElement.onclick = () => {
if (seventhElement.style.backgroundColor == "red") {
    seventhElement.style.backgroundColor = "white";
}
else {
    seventhElement.style.backgroundColor = "red";
}}

const eighthElement = document.querySelector("#seventh-element + ul");
eighthElement.onclick = () => {
    if (eighthElement.style.backgroundColor == "black") {
        eighthElement.style.backgroundColor = "white";
        eighthElement.style.color = "black";
    }
    else {
        eighthElement.style.backgroundColor = "black";
        eighthElement.style.color = "white";
    }
}

const buttons = document.getElementById("image-buttons");

const addButton = document.createElement("button");
addButton.innerHTML = "Додати";
addButton.onclick = () => {
    var src = document.getElementById("image");
    if (document.getElementById("scalable-img") == null){
        var img = document.createElement("img");
        img.id = "scalable-img";
        img.src = "https://city-adm.lviv.ua/img/843x500/d/dsc9611-9354534c.jpg";
        img.style.width = "830px";
        img.style.height = "500px";
        src.appendChild(img);
    }
}


const removeButton = document.createElement("button");
removeButton.innerHTML = "Видалити";
removeButton.onclick = () => {
    var src = document.getElementById("image");
    var scalableImage = document.getElementById("scalable-img");
    if (document.getElementById("scalable-img") != null){
        scalableImage.remove();
    }
}


const upscaleButton = document.createElement("button");
upscaleButton.innerHTML = "Збільшити";
upscaleButton.onclick = () => {
    var src = document.getElementById("image");
    var scalableImage = document.getElementById("scalable-img");
    if (document.getElementById("scalable-img") != null){
        scalableImage.style.width = (scalableImage.offsetWidth + 30).toString() + "px";
        scalableImage.style.height = (scalableImage.offsetHeight + 20).toString() + "px";
    }
}


const downscaleButton = document.createElement("button");
downscaleButton.innerHTML = "Зменшити";
downscaleButton.onclick = () => {
    var src = document.getElementById("image");
    var scalableImage = document.getElementById("scalable-img");
    if (document.getElementById("scalable-img") != null){
        scalableImage.style.width = (scalableImage.offsetWidth - 30).toString() + "px";
        scalableImage.style.height = (scalableImage.offsetHeight - 20).toString() + "px";
    }
}


buttons.appendChild(addButton);
buttons.appendChild(removeButton);
buttons.appendChild(upscaleButton);
buttons.appendChild(downscaleButton);