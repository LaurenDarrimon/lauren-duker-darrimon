let portfolioSection = $("#portfolio");

//use fat arrow syntax to declare function that will get information about my repos from Github
const getRepos = () => {

  // API endpoint URL of starred Github repos at my user name 
  let requestUrl = 'https://api.github.com/users/laurendarrimon/starred';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

        
        console.log (data); //explore response data

        
    displayItems(data);
    });
}

const displayItems = data => {
    for (let i=0; i<3; i++){ 

        //loop through response data and grab the bits we need
        let siteName = data[i].name;
        let siteDescription = data[i].description;
        let repoLink = data[i].html_url; 
        let siteLink = `https://laurendarrimon.github.io/${data[i].name}`;


        //create the various elements 


        //fill the elements


        //append elements to item div


        //append item div to portolfio item section div




        
        
    }
}

getRepos();

