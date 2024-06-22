const form = document.getElementById("form")
const input = document.querySelectorAll("input")
const error = document.querySelectorAll("#error")

const numberCard = document.getElementById("numberCard")
const wrongFormat = document.getElementById("wrongFormat")
const namevalue = document.getElementById("namevalue")
const date = document.getElementById("date")
const cvc = document.getElementById("cvc")
const thanks = document.getElementById("thanks")     
const Confirm = document.getElementById("Confirm")     
const monthValue = document.getElementById("monthValue")     
const YearValue = document.getElementById("YearValue")     
const thanksContinue = document.getElementById("thanksContinue")     
let x ;
let y ;
let z ;
let h ;


form.addEventListener("submit",(e) => {
    e.preventDefault()
    for (let i = 1; i < input.length; i++) {
        if (input[i].value === "") { 
                error[i].classList.remove("hidden")
                   x = 1   
                   y = 1
                   z = 1
                   h = 1

        }
        else if (input[2].value.length > 0 & input[3].value.length > 0) {
            error[2].classList.add("hidden") 
            z = 2
            
        }
        if (input[0].value === "") {
            error[0].classList.remove("hidden") 
        }
        else if (input[0].value.length > 0) {
            error[0].classList.add("hidden") 
            x = 2
           
        }
       if (!isNumber(input[1].value.trim()) & input[1].value.length === 16) {
        wrongFormat.classList.remove("hidden")
        error[1].classList.add("hidden")
         y = 1
        
       }else if(isNumber(input[1].value.trim()) & input[1].value.length === 16 ){
        wrongFormat.classList.add("hidden")
        error[1].classList.add("hidden") 
        y = 2
       }
       if (input[4].value.length === 3) {
        error[3].classList.add("hidden") 
        h = 2
       }
 
      if (x === 2 & y === 2 & z === 2 & h === 2) {
        console.log(x,y,z,h)

        form.classList.add("hidden")
        thanks.classList.remove("hidden")
      }
    }

})

function isNumber(input) {
    return /^(0|[1-9]\d*)$/.test(input)
}

for (let i = 2; i < 5; i++) {
    input[i].oninput = () => {
        if (input[i].value.length > input[i].maxLength) {
             input[i].value = input[i].value.slice(0,input[i].maxLength)

        }
    }
    
}



for (let i = 0; i < input.length; i++) {
    input[0].addEventListener("input", () => {
        namevalue.innerHTML = input[0].value
    
    })
    input[1].addEventListener("input", () => {
        numberCard.innerHTML = input[1].value.trim()
    
    })
    input[2].addEventListener("input", () => {
        monthValue.innerHTML = input[2].value
    
    })
    input[3].addEventListener("input", () => {
        YearValue.innerHTML = input[3].value
    
    })
    input[4].addEventListener("input", () => {
        cvc.innerHTML = input[4].value
    
    })
}

thanksContinue.addEventListener("click" , () =>{
    form.classList.remove("hidden")
    thanks.classList.add("hidden")
})
