console.log("starting test server")

const url = "https://api.adviceslip.com/advice"

document.addEventListener("DOMContentLoaded", () => {

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      } )
})