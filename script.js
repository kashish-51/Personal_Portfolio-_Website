// for varing text 

var typed = new Typed(".multiple-text" , {
    strings:["Front-End Developer",  "Web Developer","Content Writer", " Painter"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay: 1000,
    loop:true
})

//to show content in about section

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {                                                   //defining a function and passing a parameter 
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for (let i = 0; i < tabcontents.length; i++) {         //This ensures that any previously active tab link or content becomes inactive.
        tabcontents[i].classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link")                            //to display the underline below  heading when clicked
    document.getElementById(tabname).classList.add("active-tab")                //to display the content below  heading when clicked
}


//for menu bar


var sideMenu = document.getElementById("sidemenu")
function openmenu(){
    sideMenu.style.right="0"                                    // whenever right is 0 it will show menu
}
function closemenu(){
    sideMenu.style.right="-200px"                                    // whenever right is -200 it will close menu
}

