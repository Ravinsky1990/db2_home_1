(function burger(){
    //refs
    const burger = document.getElementsByClassName("burger")
    //console.log(burger);

    //add listeners
    burger[0].addEventListener("click", ()=>{
        const sidebar = document.getElementsByClassName("sidebar")[0];
        const engredients = document.querySelectorAll(".burger span");
        //console.log(engredients)

        if(sidebar.classList.contains("sidebar_visible")){
            sidebar.className = "sidebar sidebar_hidden";
            engredients[0].className = "burger__cheese cheese-rotateClose",
            engredients[1].className = "burger__salad salad-rotateClose"
            engredients[2].className = "burger__meat"
        }else{
            sidebar.className = "sidebar sidebar_visible" ;
            engredients[0].className = "burger__cheese cheese-rotateOpen",
            engredients[1].className = "burger__salad salad-rotateOpen"
            engredients[2].className = "burger__meat meat-hidden"
        }
    })

})()