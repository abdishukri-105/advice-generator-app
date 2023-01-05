console.log("starting test server")
// url to api endpoint
const url = "https://api.adviceslip.com/advice"

document.addEventListener("DOMContentLoaded", () => {

    // fetch data on click dice button

    const diceButton = document.querySelector(".dice-button")
    
    diceButton.addEventListener('click', ()=> {
        fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          renderAdvice(data);
        } )
    })

   
    
// render data on ui
      const renderAdvice = (data) =>{
           const message = document.querySelector("#adviceContent")
           message.innerHTML = data.slip.advice;
           console.log(message)
           
           const adviceId = document.querySelector("#adviceNo")
           adviceId.innerHTML = data.slip.id

      }

})



      
