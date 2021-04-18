console.log("js active")
const button = document.getElementById('send');
const convertWordToPirate = () => {
  button.addEventListener('submit', async (e) => {
    e.preventDefault()
    let data = e.target[0].value;
    const url = 'http://localhost:3000/api/pirate'
    fetch(url, {

      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify(data),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      // Converting to JSON
      .then(response => response.json())

      // Displaying results to console
      .then(json => {
        // Skickar tillbaka data från server och ersätter nuvarande value med result-data
        e.target[1].disabled = true
        e.target[0].value = json;
      });
  })
}

convertWordToPirate()