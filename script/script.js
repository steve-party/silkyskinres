function reponsiveTopMemue() {
    var x = document.getElementById("topnavbar");
    if (x.className == "topnavmenue") {
        x.className += " responsive";
    } else {
        x.className = "topnavmenue";
    }
}