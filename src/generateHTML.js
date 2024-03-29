function generateHTML(teamArray) {
    return `<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Generate Team</title>
    <meta name="description" content="">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="./src/style.css">
     </head>

 <body>
 <header>
 <div class="bg-danger jumbotron jumbotron-fluid">
     <div class="container ">
         <h1 class="display-3 text-center ">My Team</h1>
     </div>
 </div>
</header>

<!--cards-->
<div class="projectswrap">
              ${teamArray.map(person => {
        if (person.getRole() === "Manager") {
            return `<div class="manager cardDisplay card text-white bg-primary mb-3" style="max-width: 25rem;">
                 <div class="card-header bg">${person.name}
                     <p>Manager</p>
                 </div>
                 <div class=" card-body bg-light text-dark">
                     <ul class="list-group list-group-flush">
                         <li class="list-group-item border border-dark">ID: ${person.id}</li>
                         <li class="list-group-item border border-dark">Email: <a target="_blank" href="mailto:${person.email}">${person.email}</a></li>
                        
                         <li class="list-group-item border border-dark">Office Number: ${person.officeNumber}</li>
                     </ul>
                 </div>
             </div>`

        } else if (person.getRole() === "Intern") {
            return `<div class="intern cardDisplay card text-white bg-primary mb-3" style="max-width: 25rem;">
                 <div class="card-header bg">${person.name}
                     <p>Intern</p>
                 </div>
                 <div class=" card-body bg-light text-dark">
                     <ul class="list-group list-group-flush">
                         <li class="list-group-item border border-dark">ID: ${person.id}</li>
                         <li class="list-group-item border border-dark">Email: <a target="_blank" href="mailto:${person.email}">${person.email}</a></li>
                         <li class="list-group-item border border-dark">School: ${person.school}</li>
                     </ul>
                 </div>
             </div>`

        } else {
            return `<div class="engineer cardDisplay card text-white bg-primary mb-3" style="max-width: 25rem;">
                 <div class="card-header bg">${person.name}
                     <p>Engineer</p>
                 </div>
                 <div class=" card-body bg-light text-dark">
                     <ul class="list-group list-group-flush">
                         <li class="list-group-item border border-dark">ID: ${person.id}</li>
                         <li class="list-group-item border border-dark">Email: <a target="_blank" href="mailto:${person.email}">${person.email}</a></li>
                          <li class="list-group-item border border-dark">GitHub: <a href="https://github.com/${person.github}" target="_blank">${person.github}</a></li>
                                                                                                               </ul>
                 </div>
             </div>`
        }
    })
            .join("")
        }
 
     </div>
     <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    <script src="" async defer></script>
 </body>
 </html>`
}

module.exports = generateHTML









