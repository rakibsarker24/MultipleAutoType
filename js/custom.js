

let one = document.querySelectorAll(".one")
let arr = Array.from(one)

arr.map(function(item){

    let start= -1

    function autotype(){
        start++
        item.innerHTML += item.dataset.num.charAt(start)

        if(start == item.dataset.num.length){
            start = -1
            item.innerHTML = ""
        }
    }
    setInterval(function(){
        autotype()
    }, 200)
})


