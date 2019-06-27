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
            engredients[0].className = "burger__cheese cheese-rotateClose"
        }else{
            sidebar.className = "sidebar sidebar_visible" ;
            engredients[0].className = "burger__cheese cheese-rotateOpen"
        }
    })

})()