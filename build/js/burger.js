(function burger(){
    //refs
    const burger = document.getElementsByClassName("burger")
    console.log(burger);

    //add listeners
    burger[0].addEventListener("click", ()=>{
        const sidebar = document.getElementsByClassName("sidebar")[0];
        if(sidebar.classList.contains("sidebar_visible")){
            sidebar.className = "sidebar sidebar_hidden" 
        }else{
            sidebar.className = "sidebar sidebar_visible" 
        }
    })

})()