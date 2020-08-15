let count = 0;
function like() {
    let x = document.querySelector("#l1");
    count++;
    x.value = "Like " + count;
}
function postcmt() {

    let x = document.querySelector("#i1").value;
    let c = document.querySelector("#c1").cloneNode(true);
    c.style.visibility = "visible";
    c.children[0].innerHTML = x;
    let z = document.querySelector("#c2");
    z.insertBefore(c, z.firstChild);

    document.querySelector("#i1").value = ""
    /*
    let uc=document.querySelector("#i1").value;
    let clo =document.querySelector("#c1").cloneNode(true);
    clo.children[0].innerHTML=uc;
    let z= document.querySelector("#c2");
    z.insertBefore(clo,z.firstChild);
    document.querySelector("#i1").value="";*/
}

function del(d) {

    d.parentElement.remove();
}