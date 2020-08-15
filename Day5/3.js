var counter = 0;
var commentcounter = 0;

function likehere() {
    counter++;
    document.querySelector('#likeid').innerHTML = "Like-" + counter;
}

function commenthere() {
    // newelement initialization
    let newElement = document.createElement("div");
    newElement.textContent = "comment " + commentcounter;

    // styling
    newElement.style.background = "green";
    newElement.style.margin = "4px";

    // appending to the parent box
    let commentbox = document.querySelector("#commentbox");
    commentbox.appendChild(newElement);

    commentcounter++;
}