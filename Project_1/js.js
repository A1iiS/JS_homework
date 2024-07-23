document.querySelector("#button-2").onclick = function() {
    let text1 = document.querySelector("#text-1");
    text1.innerHTML = "blue";
    text1.style.color = "blue";
    alert("hello world 1");
}
document.querySelector("#text-1").onclick = function(){
    this.innerHTML = "red";
}
