var Secret = document.getElementById("MySecret");
var btn = document.getElementById("Btn");
var span = document.getElementsByClassName("close")[0];

function SS() {
    Secret.style.display = "block";
}

span.onclick = function() {
    Secret.style.display = "none";
}

function verify(){
    
    var vol = document.getElementById("age").value;

    if (vol <= 17) {
        window.location.assign("Error.html")
    } else {
        window.location.assign("Secret.html")
    }
}