

function send1() {
    let inpvalue = document.querySelector('#inp1').value;
    let clonevalue = document.querySelector('#placehere1').cloneNode(true);

    clonevalue.innerHTML = inpvalue;

    let commentdiv = document.querySelector('#commentdiv1');
    commentdiv.appendChild(clonevalue, commentdiv.children[0]);
    document.querySelector('#inp1').value = "";
}


function send2() {
    let inpvalue = document.querySelector('#inp2').value;
    let clonevalue = document.querySelector('#placehere2').cloneNode(true);

    clonevalue.innerHTML = inpvalue;

    let commentdiv = document.querySelector('#commentdiv2');
    commentdiv.appendChild(clonevalue, commentdiv.children[0]);
    document.querySelector('#inp2').value = "";
}
