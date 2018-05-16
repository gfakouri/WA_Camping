//FUNCTION TO OPEN AND CLOSE SIDE AND TOP NAVBAR

function openSlideMenu() {
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("side-menu").style.outlineOffset = "5px";
    document.getElementById("side-menu").style.margin = "10px";
    //document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("top-menu").style.height = "0px";
    document.getElementById("top-menu").style.margin = "0px";

}

function closeSlideMenu() {
    document.getElementById("side-menu").style.width = "0px";
    document.getElementById("side-menu").style.outlineOffset = "0px";
    document.getElementById("side-menu").style.margin = "0px";
    //document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("top-menu").style.height = "63px";
    document.getElementById("top-menu").style.margin = "5px";
}

