console.log("starting test server")

const url = "https://api.adviceslip.com/advice"

document.addEventListener("DOMContentLoaded", () => {

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        renderAdvice(data);
      } )
    

      const renderAdvice = (data) =>{
           const message = document.querySelector("#adviceContent")
           message.innerHTML = data.slip.advice;
           console.log(message)
           
           const adviceId = document.querySelector("#adviceNo")
           adviceId.innerHTML = data.slip.id
      }

})