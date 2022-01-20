let portfolioSection = $("#portfolio");


//use fat arrow syntax to declare function that will get information about my repos from Github
const getRepos = () => {

  // URL of starred repos
  let requestUrl = 'https://api.github.com/users/laurendarrimon/starred';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

        //explore response data
        console.log (data);

        for (let i=0; i<3; i++){
            //loop through response data for certain values. 
            console.log(data[i].url)
            console.log(data[i].description)
            console.log(data[i].name)
        }

    });
}

getRepos();

