// function closeMenu(){
//     let subMenu = document.getElementsByClassName("menu-link");
//     for (let i = 0; i < subMenu.length; i++){
//         subMenu[i].style.display="none";
//     }
// }

// document.getElementById("main-menu").onmouseover = function(event){
//     let target = event.target;
//     if (target.className == "menu-main-h"){
//         let s = target.getElementsByClassName("menu-link");
//         closeMenu();
//         s[0].style.display="block";
//     }
// }

// document.onmouseover=function(event){
//     let target = event.target;
//     console.log(event.target);
//     if (target.className != "menu-main-h" && target.className != "menu-link"){
//         closeMenu();
//     }
// }

// closeMenu();

// document.getElementById("main-menu").onmouseover = function(event){
//     let targ = event.target;
//     if (target.className == "menu-main-h"){
//     }
// }

let clickCount = 1;

var nav = document.getElementById('nav');
nav.addEventListener('click', function(e) {
    clickCount++;

    var target = e.target;

    var targetParent = target.closest('.menu-item');

    if (targetParent) {
        var subm = targetParent.getElementsByClassName('submenu')[0];
        close();
        if (subm && clickCount % 2 == 0) {
            subm.style.display = 'block';
        }
        else{
            subm.style.display = 'none';
        }
    }
});

function close() {
    var s = document.getElementsByClassName('submenu');
    for (var i = 0; i < s.length; i++) {
        s[i].style.display = 'none';
    }
}