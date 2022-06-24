// let animItems = document.getElementsByClassName("_anim-items");

// window.addEventListener("scroll", () =>{
//     for (let i = 0; i < animItems.length; i++){
//         let content = animItems[i];
//         let contentPosition = content.getBoundingClientRect().top;
//         let screenPosition = window.innerHeight;
//         if (contentPosition < screenPosition){
//             content.classList.add("active");
//         }
//     }
// })


let animItems = document.getElementsByClassName("_anim-items");

window.addEventListener("scroll", anim);
function anim(){
    for (let i = 0; i < animItems.length; i++){
        let content = animItems[i];
        let contentPosition = content.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        if (contentPosition < screenPosition){
            content.classList.add("active");
        }
    }
}

anim();


let upArrow = document.getElementsByClassName("up-arrow-container");
let infoBlock = document.getElementsByClassName("info");
let testBlock = document.getElementsByClassName("test-block");

window.addEventListener("scroll", animArrow);
function animArrow(){
    let content = upArrow[0];

    if (infoBlock.length > 0){
        let infoPosition = infoBlock[0].getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        if (screenPosition >  infoPosition){
            content.classList.add("acrive-arrow");
        }
        else{
            content.classList.remove("acrive-arrow");
        }
    }
    else if (testBlock.length > 0){
        let testPosition = testBlock[3].getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        if (screenPosition >  testPosition){
            content.classList.add("acrive-arrow");
        }
        else{
            content.classList.remove("acrive-arrow");
        }
    }
}

animArrow();