let cards = "";
console.log(cards);
function generateCards(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].getRole() == "Manager") {
      var str = `
    <div class="card mb-3" style="max-width: 18rem;">
            <div class="card-header"><h3>${data[i].getName()}</h3><i class="fa-solid fa-mug-hot"></i> Manager
            </div>
            <div class="card-body text-dark">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>
              <ul class="list-group">
                <li class="list-group-item">id:${data[i].getId()}</li>
                <li class="list-group-item">Email:<a href = "mailto:${data[i].getEmail()}"</a></li>
                <li class="list-group-item">Office number:${data[i].getOfficeNumber()}</li>
              </ul>
            </div>
          </div>
    `;
      cards += str;
    } else if (data[i].getRole() == "Engineer") {
      var str = `
      <div class="card mb-3" style="max-width: 18rem;">
            <div class="card-header"><h3>${data[i].getName()}</h3><i class="fa-solid fa-glasses"></i> Engineer</div>
            <div class="card-body text-dark">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>
              <ul class="list-group">
                <li class="list-group-item">id:${data[i].getId()}</li>
                <li class="list-group-item">Email:<a href = "mailto:${data[i].getEmail()}"</a></li>
                <li class="list-group-item">GitHub:<a href = "https://github.com/ashachakre0906">${data[i].getGitHub()}</a></li>
              </ul>
            </div>
        </div>
      `;
      cards += str;
    } else if (data[i].getRole() == "Intern") {
      var str = `
      <div class="card mb-3" style="max-width: 18rem;">
          <div class="card-header"><h3>${data[i].getName()}</h3><i class="fa-solid fa-user-graduate"></i> Intern</div>
            <div class="card-body text-dark">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>
              <ul class="list-group">
                <li class="list-group-item">id:${data[i].getId()}</li>
                <li class="list-group-item">Email:<a href = "mailto:${data[i].getEmail()}"</a></li>
                <li class="list-group-item">School:${data[i].getSchool()}</li>
              </ul>
            </div>
      </div>
     `;
     cards += str;
    }
  }
  return cards;
}

module.exports = (teamMembers) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel ="stylesheet" href = "assets/css/style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-info justify-content-center align-items-center">
            <span class="navbar-brand mb-0 h1">
                <h1>My Team</h1>
            </span>
        </nav>
    <div class ="card-container">
        ${generateCards(teamMembers)}
        <div class="card mb-3" style="max-width: 18rem;">
        <div class="card-header"><h3></h3><i class="fa-solid fa-mug-hot"></i> Manager
        </div>
        <div class="card-body text-dark">
          <h5 class="card-title"></h5>
          <p class="card-text"></p>
          <ul class="list-group">
            <li class="list-group-item">id:</li>
            <li class="list-group-item">Email:<a href = "mailto:"</a></li>
            <li class="list-group-item">Office number:</li>
          </ul>
        </div>
       </div>
        <div class="card mb-3" style="max-width: 18rem;">
            <div class="card-header"><h3></h3><i class="fa-solid fa-glasses"></i> Engineer</div>
            <div class="card-body text-dark">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>
              <ul class="list-group">
                <li class="list-group-item">id:</li>
                <li class="list-group-item">Email:<a href = "mailto:"</a></li>
                <li class="list-group-item">GitHub:<a href = "https://github.com/ashachakre0906"></a></li>
              </ul>
            </div>
        </div>
        <div class="card mb-3" style="max-width: 18rem;">
        <div class="card-header"><h3></h3><i class="fa-solid fa-user-graduate"></i> Intern</div>
          <div class="card-body text-dark">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            <ul class="list-group">
            <li class="list-group-item">id:</li>
            <li class="list-group-item">Email:<a href = "mailto:"</a></li>
              <li class="list-group-item">School:</li>
            </ul>
          </div>
        </div>
      </div>       
    </body>
  </html>
    `;
};
