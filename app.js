const button = document.querySelectorAll(".button")
const body = document.querySelector("body")

button.forEach(function (clickMe){
    // console.log(clickMe)
    clickMe.addEventListener("click",function (){




        // +++++++++++++++++++++Using using Cases++++++++++++++++++++++++++++++++++

        switch(this.id){
            case "gray":
               body.style.backgroundColor = this.id
               break
            case "pink":
               body.style.backgroundColor = this.id
               break
            case "blue":
               body.style.backgroundColor = this.id
               break
            case "yellow":
               body.style.backgroundColor = this.id
               break;
               default :
               alert("invalid select")
        }


        // +++++++++++++++++++++Using If / Else++++++++++++++++++++++++++++++++++
// if(e.target.id === "gray"){
//     body.style.backgroundColor = e.target.id
// }
// if(e.target.id === "pink"){
//     body.style.backgroundColor = e.target.id
// }
// if(e.target.id === "blue"){
//     body.style.backgroundColor = e.target.id
// }
// if(e.target.id === "yellow"){
//     body.style.backgroundColor = e.target.id
// }
        // +++++++++++++++++++++Using If / Else++++++++++++++++++++++++++++++++++


    })

})
