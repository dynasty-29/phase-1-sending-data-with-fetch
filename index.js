// Add your code here
//Test 1 - Send Data
function submitData(name, email) {
    // Define the data object with name and email
    const formData = {
      name: name,
      email: email,
    };

    // Define the configuration object for the fetch request
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    };

    return fetch("http://localhost:3000/users", configurationObject)
          //Test 2 - Handle the Response 
          .then(function(response){
            return response.json();
          })
          .then(function(object){
             // Append the new ID to the DOM
             const body = document.querySelector("body");
             const p = document.createElement("p");
             p.textContent = `New ID: ${object.id}`;
             body.appendChild(p);
          })
          //Test 3 - Handle Errors
          .catch(function(error){
            alert("Ooops! Something is wrong");
            const body = document.querySelector("body");
            const p = document.createElement("p");
            p.textContent = `Error: ${error.message}`;
            body.appendChild(p);
          })
  }

 submitData("Maggie", "keep@knowit.com"); 


